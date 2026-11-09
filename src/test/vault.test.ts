import { describe, expect, it } from "vitest";

import { NEWSLETTER_TEMPLATE_COUNT, SEQUENCE_EMAIL_COUNT, VAULT_MODULES } from "@/lib/vault";

const mod = (key: string) => VAULT_MODULES.find((m) => m.key === key)!;

describe("Copy & Paste Marketing Vault contents", () => {
  it("has exactly three modules", () => {
    expect(VAULT_MODULES).toHaveLength(3);
  });

  it("includes 12 Canva template blueprints", () => {
    expect(mod("canva").count).toBe(12);
  });

  it("includes 12 video scripts", () => {
    expect(mod("video").count).toBe(12);
  });

  it("includes 6 email packs", () => {
    expect(mod("email").count).toBe(6);
    expect(mod("email").includes).toHaveLength(6);
  });

  it("has 21 sequence emails plus one newsletter template", () => {
    expect(SEQUENCE_EMAIL_COUNT).toBe(21);
    expect(NEWSLETTER_TEMPLATE_COUNT).toBe(1);
  });
});
