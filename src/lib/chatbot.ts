export type Checklist = {
  title: string;
  blurb: string;
  items: string[];
};

/** Draft checklist outline — adapt these steps to the current ChatThing and Dante AI interfaces. */
export const CHATBOT_CHECKLISTS: Checklist[] = [
  {
    title: "Plan your chatbot",
    blurb: "Decide what it's for before you build anything.",
    items: ["Pick one job for it to do first", "Choose who will use it — you or your clients", "List the questions it should handle"],
  },
  {
    title: "Choose your chatbot platform",
    blurb: "Compare ChatThing and Dante AI, then start with the one that fits your workflow.",
    items: ["Review each platform's current features and plans", "Decide where clients will use the chatbot", "Create an account with your chosen platform"],
  },
  {
    title: "Gather your files",
    blurb: "Prepare information you're allowed to share with an AI tool.",
    items: ["Your own market summaries", "Your neighborhood guides", "Your FAQs and process documents"],
  },
  {
    title: "Build your chatbot",
    blurb: "Use ChatThing or Dante AI's no-code setup to configure your assistant.",
    items: ["Create a chatbot in your chosen platform", "Add its role, tone, and helpful boundaries", "Upload or connect your approved knowledge sources"],
  },
  {
    title: "Test it before you rely on it",
    blurb: "Catch wrong or made-up answers early.",
    items: ["Run the 30 test questions", "Check every answer against your files", "Tighten the instructions or sources where it slips"],
  },
  {
    title: "Keep it up to date",
    blurb: "A quick routine so it never goes stale.",
    items: ["Swap in fresh market summaries", "Add new questions clients ask", "Re-test after every source or setup change"],
  },
  {
    title: "Put it to work",
    blurb: "Start using it in your day-to-day, safely.",
    items: ["Answer your own client questions first", "Review every draft before you send", "Share it with clients when you're confident"],
  },
];

/** Ready-to-use instruction templates for configuring your chatbot. */
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
  "Draft replies in your tone, using the knowledge sources you provide",
  "Answer common buyer and seller questions from your FAQs",
  "Pull details from your own neighborhood guides",
  "Give you a consistent first draft every time",
  "Be updated when you refresh its sources and configuration",
];

export const CANT_DO = [
  "Know live listings or today's prices unless you provide current information",
  "Learn on its own — it uses the instructions and sources you configure",
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
export const CHATBOT_BUY_URL = "https://warriorplus.com/o2/buy/v19ymw/s660hn/thq2lh";
export const CHATBOT_BUY_PIXEL_URL = "https://warriorplus.com/o2/btn/pn100011001/v19ymw/s660hn/480935";
export const CHATBOT_DECLINE_URL = "https://warriorplus.com/o/nothanks/s660hn";
