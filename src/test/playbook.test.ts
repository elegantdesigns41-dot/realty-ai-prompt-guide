import { describe, expect, it } from "vitest";

import { PROMPT_CATEGORIES, TOTAL_PROMPTS } from "@/lib/playbook";

describe("Prompt playbook contents", () => {
  it("contains at least 300 prompts across its categories", () => {
    const sum = PROMPT_CATEGORIES.reduce((s, c) => s + c.count, 0);
    expect(sum).toBe(TOTAL_PROMPTS);
    expect(TOTAL_PROMPTS).toBeGreaterThanOrEqual(300);
  });
});
