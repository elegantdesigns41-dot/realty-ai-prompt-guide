import { describe, expect, it } from "vitest";

import {
  CHATBOT_BUY_URL,
  CHATBOT_CHECKLISTS,
  CHATBOT_DECLINE_URL,
  INSTRUCTION_TEMPLATES,
  TEST_QUESTION_COUNT,
} from "@/lib/chatbot";

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

  it("sends the Yes button to the WarriorPlus chatbot checkout", () => {
    expect(CHATBOT_BUY_URL).toBe("https://warriorplus.com/o2/buy/v19ymw/s660hn/thq2lh");
  });

  it("sends the No thanks button to the WarriorPlus chatbot no-thanks page", () => {
    expect(CHATBOT_DECLINE_URL).toBe("https://warriorplus.com/o/nothanks/s660hn");
  });
});
