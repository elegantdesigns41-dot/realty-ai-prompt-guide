import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { WarriorPlusDisclaimer } from "@/components/funnel";

describe("WarriorPlus disclaimer", () => {
  it("renders the empty div WarriorPlus fills with its site disclaimer", () => {
    const { container } = render(<WarriorPlusDisclaimer />);
    const holder = container.querySelector("div.wplus_spdisclaimer");

    expect(holder).not.toBeNull();
    expect(holder?.textContent).toBe("");
  });
});
