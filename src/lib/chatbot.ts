export type Checklist = {
  title: string;
  blurb: string;
  items: string[];
};

/** Draft checklist outline — replace with the real product contents when available. */
export const CHATBOT_CHECKLISTS: Checklist[] = [
  {
    title: "Plan your chatbot",
    blurb: "Decide what it's for before you build anything.",
    items: ["Pick one job for it to do first", "Choose who will use it — you or your clients", "List the questions it should handle"],
  },
  {
    title: "Write its instructions",
    blurb: "The instructions are what make it sound and act like you.",
    items: ["Its role and tone of voice", "What it should always and never do", "Fair housing guardrails"],
  },
  {
    title: "Gather your files",
    blurb: "Load it with information you're free to share.",
    items: ["Your own market summaries", "Your neighborhood guides", "Your FAQs and process documents"],
  },
  {
    title: "Build it step by step",
    blurb: "Click-by-click setup, no coding.",
    items: ["Create the custom GPT", "Paste in your instructions", "Upload your files and set conversation starters"],
  },
  {
    title: "Test it before you rely on it",
    blurb: "Catch wrong or made-up answers early.",
    items: ["Run the 30 test questions", "Check every answer against your files", "Tighten the instructions where it slips"],
  },
  {
    title: "Keep it up to date",
    blurb: "A quick routine so it never goes stale.",
    items: ["Swap in fresh market summaries", "Add new questions clients ask", "Re-test after every change"],
  },
  {
    title: "Put it to work",
    blurb: "Start using it in your day-to-day, safely.",
    items: ["Answer your own client questions first", "Review every draft before you send", "Share it with clients when you're confident"],
  },
];

/** Ready-to-use instruction templates — drop in your details and paste into your custom GPT. */
export const INSTRUCTION_TEMPLATES = [
  {
    title: "Buyer question assistant",
    blurb: "Answers common buyer questions from your FAQs and process documents.",
  },
  {
    title: "Seller question assistant",
    blurb: "Walks sellers through your process, pricing approach and what to expect.",
  },
  {
    title: "Neighborhood expert",
    blurb: "Draws on your own neighborhood guides and market summaries.",
  },
];

/** Questions to run against your chatbot before you rely on it. */
export const TEST_QUESTION_COUNT = 30;

export const CAN_DO = [
  "Draft replies in your tone, using the files you've loaded",
  "Answer common buyer and seller questions from your FAQs",
  "Pull details from your own neighborhood guides",
  "Give you a consistent first draft every time",
  "Be updated any time by swapping in new files",
];

export const CANT_DO = [
  "Know live listings or today's prices unless you give it that information",
  "Learn on its own — it follows your instructions and draws on your uploaded files",
  "Replace your judgment, your license, or legal and contract advice",
  "Guarantee every answer is correct — always review before you send",
  "Promise more leads, listings or income",
];

/** Placeholder until the real upsell price is confirmed. */
export const CHATBOT_PRICE_USD = 37;
export const CHATBOT_PRICE_LABEL = `$${CHATBOT_PRICE_USD}`;

/**
 * WarriorPlus upsell links (from the product's WarriorPlus dashboard).
 * Leave empty until the real links are available; the buttons then show a notice.
 */
export const CHATBOT_BUY_URL = "";
export const CHATBOT_DECLINE_URL = "";
