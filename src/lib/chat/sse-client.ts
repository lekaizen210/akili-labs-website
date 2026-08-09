export type SseMessage = { event: string; data: unknown };

/** Parseur minimal de flux Server-Sent Events (format `event:`/`data:` séparé par une ligne vide). */
export async function* parseSseStream(body: ReadableStream<Uint8Array>): AsyncGenerator<SseMessage> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let sepIndex = buffer.indexOf("\n\n");
    while (sepIndex !== -1) {
      const rawEvent = buffer.slice(0, sepIndex);
      buffer = buffer.slice(sepIndex + 2);

      const lines = rawEvent.split("\n");
      const eventLine = lines.find((l) => l.startsWith("event:"));
      const dataLine = lines.find((l) => l.startsWith("data:"));

      if (eventLine && dataLine) {
        const event = eventLine.slice("event:".length).trim();
        const dataRaw = dataLine.slice("data:".length).trim();
        try {
          yield { event, data: JSON.parse(dataRaw) };
        } catch {
          // chunk malformé — ignoré
        }
      }

      sepIndex = buffer.indexOf("\n\n");
    }
  }
}
