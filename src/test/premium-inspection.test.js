import { render } from "./test-utils";

import PremiumInpection from "../pages/premium-inspection";

describe("Premium inspection page", () => {
  test("About page matches snapshot", () => {
    const { asFragment } = render(<PremiumInpection />);
    expect(asFragment()).toMatchSnapshot();
  });
});
