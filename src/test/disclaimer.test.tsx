import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { BuyBlock, WarriorPlusDisclaimer } from "@/components/funnel";

describe("WarriorPlus disclaimer", () => {
  it("renders the empty div WarriorPlus fills with its site disclaimer", () => {
    const { container } = render(<WarriorPlusDisclaimer />);
    const holder = container.querySelector("div.wplus_spdisclaimer");

    expect(holder).not.toBeNull();
    expect(holder?.textContent).toBe("");
  });

  it("sits under the buy button when the offer asks for it", () => {
    const { container } = render(
      <BuyBlock label="Yes, add it" declineLabel="No thanks" onBuy={() => {}} showDisclaimer />,
    );

    expect(container.querySelector("div.wplus_spdisclaimer")).not.toBeNull();
  });

  it("stays out of a buy button that doesn't ask for it", () => {
    const { container } = render(
      <BuyBlock label="Yes, add it" declineLabel="No thanks" onBuy={() => {}} />,
    );

    expect(container.querySelector("div.wplus_spdisclaimer")).toBeNull();
  });
});
