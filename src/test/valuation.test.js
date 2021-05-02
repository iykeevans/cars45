import { render } from "./test-utils";

import Valuation from "../pages/valuation";

describe("Valuation page", () => {
  test("Valuation page matches snapshot", () => {
    const { asFragment } = render(<Valuation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
