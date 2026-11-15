import { describe, expect, it } from "vitest";

import { BONUSES, PRICE_LABEL, PRICE_USD, PROMPT_CATEGORIES, PROMPT_COUNT_LABEL, TOTAL_PROMPTS } from "@/lib/playbook";

describe("Prompt guide contents", () => {
  it("contains at least 300 prompts across its categories", () => {
    const sum = PROMPT_CATEGORIES.reduce((s, c) => s + c.count, 0);
    expect(sum).toBe(TOTAL_PROMPTS);
    expect(TOTAL_PROMPTS).toBeGreaterThanOrEqual(300);
  });

  it("advertises the prompt count as 300+", () => {
    expect(PROMPT_COUNT_LABEL).toBe("300+");
  });

  it("shows the category cards with the agreed names and counts", () => {
    expect(PROMPT_CATEGORIES.map((c) => [c.title, c.count])).toEqual([
      ["Listing creation", 30],
      ["Social media marketing", 33],
      ["Lead generation", 35],
      ["Email marketing", 30],
      ["Client communication", 40],
      ["Market research", 25],
      ["Open houses", 20],
      ["Buyer agent toolkit", 34],
      ["Seller agent toolkit", 35],
      ["Productivity", 25],
      ["Bonus AI prompts", 22],
    ]);
  });

  it("sells for $12.95", () => {
    expect(PRICE_USD).toBe(12.95);
    expect(PRICE_LABEL).toBe("$12.95");
  });

  it("includes the image and blog prompt packs among the free bonuses", () => {
    const titles = BONUSES.map((b) => b.title);
    expect(titles).toContain("Midjourney Prompts");
    expect(titles).toContain("DALL·E Prompts");
    expect(titles).toContain("Blog Writing Prompts");
  });
});
