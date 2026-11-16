import { describe, expect, it } from "vitest";

import { LITE_MODULES } from "@/lib/vault-lite";

const mod = (key: string) => LITE_MODULES.find((m) => m.key === key)!;

describe("Marketing Vault Lite contents", () => {
  it("has exactly three modules", () => {
    expect(LITE_MODULES).toHaveLength(3);
  });

  it("includes 13 Canva template blueprints", () => {
    expect(mod("canva").count).toBe(13);
  });

  it("includes 2 starter email packs", () => {
    expect(mod("email").count).toBe(2);
    expect(mod("email").includes).toHaveLength(2);
  });

  it("includes 2 design worksheets", () => {
    expect(mod("worksheets").count).toBe(2);
    expect(mod("worksheets").includes).toHaveLength(2);
  });
});
