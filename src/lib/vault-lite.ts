export type LiteModule = {
  key: string;
  count: number;
  unit: string;
  title: string;
  blurb: string;
  includes: string[];
};

export const LITE_MODULES: LiteModule[] = [
  {
    key: "canva",
    count: 13,
    unit: "blueprints",
    title: "Canva template blueprints",
    blurb: "The core set of designs every agent needs, ready to build in Canva.",
    includes: ["The exact canvas size", "The layout, block by block", "Paste-ready copy blocks"],
  },
  {
    key: "email",
    count: 2,
    unit: "starter email packs",
    title: "Starter email packs",
    blurb: "The two sequences that matter most when you're starting out.",
    includes: ["Welcome pack", "Buyer nurture pack"],
  },
  {
    key: "worksheets",
    count: 2,
    unit: "design worksheets",
    title: "Design worksheets",
    blurb: "Plan your posts and keep your look consistent without a designer.",
    includes: ["Content planning worksheet", "Brand style worksheet"],
  },
];

/** Placeholder until the real downsell price is confirmed. */
export const LITE_PRICE_USD = 17;
export const LITE_PRICE_LABEL = `$${LITE_PRICE_USD}`;

/**
 * WarriorPlus downsell links (from the product's WarriorPlus dashboard).
 * Leave empty until the real links are available; the buttons then show a notice.
 */
export const LITE_BUY_URL = "";
export const LITE_DECLINE_URL = "";
