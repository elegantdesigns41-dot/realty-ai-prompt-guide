export type VaultModule = {
  key: string;
  count: number;
  unit: string;
  title: string;
  blurb: string;
  includes: string[];
};

export const VAULT_MODULES: VaultModule[] = [
  {
    key: "canva",
    count: 13,
    unit: "blueprints",
    title: "Canva template blueprints",
    blurb: "Open Canva, follow the blueprint, paste the copy. Done.",
    includes: ["The exact canvas size", "The layout, block by block", "Paste-ready copy blocks"],
  },
  {
    key: "video",
    count: 15,
    unit: "scripts",
    title: "Video scripts",
    blurb: "Know exactly what to say, show and film before you hit record.",
    includes: ["Hook options", "On-screen text", "A shot list", "A call to action"],
  },
  {
    key: "email",
    count: 6,
    unit: "email packs",
    title: "Email packs",
    blurb: "Sequences that keep working long after you've hit send.",
    includes: [
      "Welcome",
      "Buyer nurture",
      "Seller nurture",
      "Post-closing",
      "Referral & testimonial requests",
      "Monthly newsletter template",
    ],
  },
];

/** Emails across the five sequence packs (the newsletter template is counted separately). */
export const SEQUENCE_EMAIL_COUNT = 21;
export const NEWSLETTER_TEMPLATE_COUNT = 1;

/** Placeholder until the real upsell price is confirmed. */
export const VAULT_PRICE_USD = 27;
export const VAULT_PRICE_LABEL = `$${VAULT_PRICE_USD}`;

/**
 * WarriorPlus upsell links (from the product's WarriorPlus dashboard).
 * Leave empty until the real links are available; the buttons then show a notice.
 */
export const VAULT_BUY_URL = "";
export const VAULT_DECLINE_URL = "";
