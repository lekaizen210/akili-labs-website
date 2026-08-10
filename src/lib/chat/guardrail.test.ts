import { describe, expect, it } from "vitest";
import { getGuardrailResponse } from "./guardrail";

describe("getGuardrailResponse", () => {
  it("retourne le message en français", () => {
    expect(getGuardrailResponse("fr")).toMatch(/contact@akililabs\.io/);
  });

  it("retourne le message en anglais", () => {
    const msg = getGuardrailResponse("en");
    expect(msg).toMatch(/contact@akililabs\.io/);
    expect(msg).not.toEqual(getGuardrailResponse("fr"));
  });
});
