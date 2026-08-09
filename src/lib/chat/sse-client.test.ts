import { describe, expect, it } from "vitest";
import { parseSseStream } from "./sse-client";

function streamFromChunks(chunks: string[]): ReadableStream<Uint8Array> {
  const encoder = new TextEncoder();
  return new ReadableStream({
    start(controller) {
      for (const chunk of chunks) controller.enqueue(encoder.encode(chunk));
      controller.close();
    },
  });
}

describe("parseSseStream", () => {
  it("parse des événements complets envoyés en un seul chunk", async () => {
    const stream = streamFromChunks([
      'event: intent\ndata: {"intent":"faq","language":"fr"}\n\n' +
        'event: delta\ndata: {"text":"Bonjour "}\n\n' +
        "event: done\ndata: {}\n\n",
    ]);

    const events = [];
    for await (const evt of parseSseStream(stream)) events.push(evt);

    expect(events).toEqual([
      { event: "intent", data: { intent: "faq", language: "fr" } },
      { event: "delta", data: { text: "Bonjour " } },
      { event: "done", data: {} },
    ]);
  });

  it("reconstitue un événement fragmenté sur plusieurs chunks réseau", async () => {
    const stream = streamFromChunks(['event: delta\ndata: {"te', 'xt":"partiel"}\n\n']);

    const events = [];
    for await (const evt of parseSseStream(stream)) events.push(evt);

    expect(events).toEqual([{ event: "delta", data: { text: "partiel" } }]);
  });

  it("ignore silencieusement un chunk JSON malformé", async () => {
    const stream = streamFromChunks(["event: delta\ndata: {invalide}\n\n" + "event: done\ndata: {}\n\n"]);

    const events = [];
    for await (const evt of parseSseStream(stream)) events.push(evt);

    expect(events).toEqual([{ event: "done", data: {} }]);
  });
});
