export type PromptCategory = {
  title: string;
  count: number;
  blurb: string;
};

export const PROMPT_CATEGORIES: PromptCategory[] = [
  { title: "Listing descriptions", count: 45, blurb: "MLS copy, feature sheets and luxury write-ups that sell the lifestyle." },
  { title: "Social media content", count: 50, blurb: "Reels scripts, carousels, captions and 30-day content calendars." },
  { title: "Lead generation", count: 40, blurb: "Farming letters, FSBO and expired outreach, and ad copy that converts." },
  { title: "Email & SMS follow-up", count: 40, blurb: "Nurture sequences that keep you top of mind without sounding robotic." },
  { title: "Buyer consultations", count: 30, blurb: "Needs analysis, neighborhood guides and offer-strategy explainers." },
  { title: "Listing presentations", count: 30, blurb: "Pricing narratives, marketing plans and win-the-listing scripts." },
  { title: "Negotiation & objections", count: 25, blurb: "Calm, confident answers to commission, price and timing pushback." },
  { title: "Market reports", count: 25, blurb: "Turn raw stats into monthly updates clients actually read." },
  { title: "Open houses & events", count: 20, blurb: "Invites, sign-in follow-ups and client appreciation event plans." },
  { title: "Client care & referrals", count: 20, blurb: "Closing gifts, anniversaries and review requests that earn referrals." },
  { title: "Business & productivity", count: 15, blurb: "Business plans, SOPs, hiring posts and weekly time-blocking." },
];

export const TOTAL_PROMPTS = PROMPT_CATEGORIES.reduce((sum, c) => sum + c.count, 0);

export type SamplePrompt = {
  tab: string;
  label: string;
  prompt: string;
};

export const SAMPLE_PROMPTS: SamplePrompt[] = [
  {
    tab: "Listings",
    label: "The lifestyle listing",
    prompt:
      "Act as a top-producing listing agent in [city]. Write a 200-word MLS description for a [beds]-bed, [baths]-bath [property type] at [price]. Lead with the lifestyle a [target buyer] would live here, weave in these features: [top 5 features], and close with a clear call to book a showing. Avoid clichés like \"must see\" and \"won't last long.\"",
  },
  {
    tab: "Social",
    label: "30-second Reel script",
    prompt:
      "Write a 30-second Instagram Reel script for a real estate agent in [neighborhood]. Hook in the first 2 seconds with a surprising local fact, show 3 quick scenes of [property or area], and end with a soft call to action to DM me \"[keyword]\". Include on-screen text for each scene and a caption with 5 local hashtags.",
  },
  {
    tab: "Follow-up",
    label: "Revive a cold lead",
    prompt:
      "I spoke with [lead name] [time ago] about buying in [area] with a budget of [budget]. They went quiet. Write 3 short, friendly text messages I can send over 10 days to restart the conversation. Each should offer genuine value (a new listing, a market stat, a helpful tip) and never feel pushy.",
  },
  {
    tab: "Objections",
    label: "\"Your commission is too high\"",
    prompt:
      "A seller in [city] says: \"Another agent offered to list for [lower %].\" Give me a calm, confident 60-second response that explains the value of my [marketing plan highlights] and net-proceeds focus, followed by 2 questions that uncover what they truly care about. Keep the tone warm, not defensive.",
  },
];

export const BONUSES = [
  { title: "The AI Setup Cheat Sheet", value: "$27", desc: "Configure ChatGPT, Claude or Gemini with your brand voice in 10 minutes." },
  { title: "90-Day Social Calendar", value: "$37", desc: "A done-for-you posting plan you fill with the playbook's prompts." },
  { title: "Fair Housing Copy Checklist", value: "$19", desc: "Keep every AI-written listing and ad compliant before it goes live." },
];

export const PRICE = { now: 47, was: 97 };
