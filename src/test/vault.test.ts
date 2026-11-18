import { describe, expect, it } from "vitest";

import {
  NEWSLETTER_TEMPLATE_COUNT,
  SEQUENCE_EMAIL_COUNT,
  VAULT_BUY_URL,
  VAULT_MODULES,
} from "@/lib/vault";

const mod = (key: string) => VAULT_MODULES.find((m) => m.key === key)!;

describe("Copy & Paste Marketing Vault contents", () => {
  it("has exactly three modules", () => {
    expect(VAULT_MODULES).toHaveLength(3);
  });

  it("includes 13 Canva template blueprints", () => {
    expect(mod("canva").count).toBe(13);
  });

  it("includes 15 video scripts", () => {
    expect(mod("video").count).toBe(15);
  });

  it("includes 6 email packs", () => {
    expect(mod("email").count).toBe(6);
    expect(mod("email").includes).toHaveLength(6);
  });

  it("has 21 sequence emails plus one newsletter template", () => {
    expect(SEQUENCE_EMAIL_COUNT).toBe(21);
    expect(NEWSLETTER_TEMPLATE_COUNT).toBe(1);
  });

  it("sends the Yes button to the WarriorPlus vault checkout", () => {
    expect(VAULT_BUY_URL).toBe("https://warriorplus.com/o2/buy/v19ymw/rdw2pv/x569q2");
  });
});
