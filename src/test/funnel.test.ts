import { describe, expect, it } from "vitest";

import { FUNNEL_ROUTES, NEXT_FUNNEL_ROUTE } from "@/components/funnel";

describe("Funnel link chain", () => {
  it("walks guide → vault → chatbot → lite", () => {
    expect([...FUNNEL_ROUTES]).toEqual(["/", "/upsell-1", "/upsell-2", "/downsell-1"]);
  });

  it("sends each declined offer to the next page in the funnel", () => {
    expect(NEXT_FUNNEL_ROUTE["/"]).toBe("/upsell-1");
    expect(NEXT_FUNNEL_ROUTE["/upsell-1"]).toBe("/upsell-2");
    expect(NEXT_FUNNEL_ROUTE["/upsell-2"]).toBe("/downsell-1");
  });

  it("has no next offer after the downsell", () => {
    expect(NEXT_FUNNEL_ROUTE["/downsell-1"]).toBeNull();
  });
});
