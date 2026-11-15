export type PromptCategory = {
  title: string;
  count: number;
  blurb: string;
};

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { title: "Listing creation", count: 30, blurb: "MLS copy by property type — condos, luxury, starter homes, land and more." },
  { title: "Social media marketing", count: 33, blurb: "Reels scripts, carousels, captions and 30-day content calendars." },
  { title: "Lead generation", count: 35, blurb: "Expired and FSBO outreach, farming letters, and ad copy that converts." },
  { title: "Email marketing", count: 30, blurb: "Nurture sequences that keep you top of mind without sounding robotic." },
  { title: "Client communication", count: 40, blurb: "Follow-ups, check-ins and status updates that keep every client in the loop." },
  { title: "Market research", count: 25, blurb: "Turn raw stats into neighborhood guides, newsletters and market updates clients actually read." },
  { title: "Open houses", count: 20, blurb: "Invites, promo posts, sign-in follow-ups and client events." },
  { title: "Buyer agent toolkit", count: 34, blurb: "Consultation scripts, buyer consultations and offer-strategy explainers." },
  { title: "Seller agent toolkit", count: 35, blurb: "Listing presentations, pricing talks and win-the-listing scripts." },
  { title: "Productivity", count: 25, blurb: "Business plans, SOPs, hiring posts and weekly time-blocking." },
  { title: "Bonus AI prompts", count: 22, blurb: "Extra prompts for the odd jobs in between — ads, review requests, video captions and more." },
];

export const TOTAL_PROMPTS = PROMPT_CATEGORIES.reduce((sum, c) => sum + c.count, 0);

export type SamplePrompt = {
  tab: string;
  label: string;
  useFor: string;
  prompt: string;
  tip: string;
};

export const SAMPLE_PROMPTS: SamplePrompt[] = [
  {
    tab: "Listings",
    label: "The MLS Listing Description",
    useFor: "Any new listing, when you need a clean, professional description fast.",
    prompt: `Act as an experienced real estate listing copywriter. Write an MLS description for the home below. Keep it under 200 words, in flowing paragraphs, written for [BUYER TYPE]. Describe the property and features only — do not reference the buyer's identity or protected class.

Property details:
- Beds/baths: [X BED / X BATH]
- Square footage: [SQ FT]
- Key features: [LIST 3-5 STANDOUT FEATURES]
- Recent updates: [LIST ANY]
- Nearby: [SCHOOLS, PARKS, COMMUTE POINTS]`,
    tip: "Always run the output through a quick fair housing check afterward.",
  },
  {
    tab: "Social",
    label: "The \"Just Listed\" Social Post",
    useFor: "The moment a new listing goes live.",
    prompt: `Act as a real estate marketer. Write a "Just Listed" announcement for this property, exciting but professional, for use across email and social. 60-80 words. End with a clear call to action.

Property details: [PASTE KEY FEATURES + PRICE]`,
    tip: "Ask for 3 tone variations (excited, calm/professional, casual) so you have options for different platforms.",
  },
  {
    tab: "Follow-up",
    label: "The Buyer Follow-Up Email",
    useFor: "Following up after a showing, without sounding pushy.",
    prompt: `Act as a real estate email copywriter. Write a follow-up email after a buyer toured a home, gauging their interest without being pushy. 100-120 words.

Property: [ADDRESS/KEY FEATURES]`,
    tip: "Ask a specific question about the home (\"how did the kitchen layout feel?\") instead of a generic \"thoughts?\" — specific questions get real answers.",
  },
  {
    tab: "Expired",
    label: "The Expired Listing Outreach",
    useFor: "Reaching out to a homeowner whose listing just expired, respectfully.",
    prompt: `Act as a real estate email copywriter. Write a respectful, non-pushy first outreach email to a homeowner whose listing just expired. Acknowledge it didn't sell without criticizing their previous agent. Offer a fresh perspective. 150-180 words.`,
    tip: "Never let the AI disparage the previous agent, even indirectly — this should sound like a fresh, confident perspective, not a takedown.",
  },
];

export const BONUSES = [
  { title: "Midjourney Prompts", desc: "Prompt formulas for listing hero shots, neighborhood mood boards and branded social visuals." },
  { title: "DALL·E Prompts", desc: "Image prompts that run inside ChatGPT — announcement graphics, seasonal posts and listing teasers." },
  { title: "Blog Writing Prompts", desc: "Turn a listing, a market stat or a neighborhood walk into a publishable blog post in one pass." },
];

export const PRICE_USD = 12.95;
export const PRICE_LABEL = `$${PRICE_USD.toFixed(2)}`;

/** Shown everywhere the total prompt count appears on the page. */
export const PROMPT_COUNT_LABEL = "300+";

/**
 * WarriorPlus buy-button link (from the product's WarriorPlus dashboard).
 * Leave empty until the real link is available; the buy button then shows a notice.
 */
export const WARRIORPLUS_BUY_URL = "";
