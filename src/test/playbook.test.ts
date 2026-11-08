import { describe, expect, it } from "vitest";

import { PRICE_LABEL, PRICE_USD, PROMPT_CATEGORIES, PROMPT_COUNT_LABEL, TOTAL_PROMPTS } from "@/lib/playbook";

describe("Prompt guide contents", () => {
  it("contains at least 300 prompts across its categories", () => {
    const sum = PROMPT_CATEGORIES.reduce((s, c) => s + c.count, 0);
    expect(sum).toBe(TOTAL_PROMPTS);
    expect(TOTAL_PROMPTS).toBeGreaterThanOrEqual(300);
  });

  it("advertises the prompt count as 300+", () => {
    expect(PROMPT_COUNT_LABEL).toBe("300+");
  });

  it("sells for $12.95", () => {
    expect(PRICE_USD).toBe(12.95);
    expect(PRICE_LABEL).toBe("$12.95");
  });
});
