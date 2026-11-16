import { describe, expect, it } from "vitest";

import { CHATBOT_CHECKLISTS, INSTRUCTION_TEMPLATES, TEST_QUESTION_COUNT } from "@/lib/chatbot";

describe("Custom AI Chatbot Checklists contents", () => {
  it("has exactly 7 step-by-step checklists", () => {
    expect(CHATBOT_CHECKLISTS).toHaveLength(7);
  });

  it("includes 3 instruction templates", () => {
    expect(INSTRUCTION_TEMPLATES).toHaveLength(3);
  });

  it("includes 30 test questions", () => {
    expect(TEST_QUESTION_COUNT).toBe(30);
  });
});
