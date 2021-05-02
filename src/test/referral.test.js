import { render } from "./test-utils";

import Referral from "../pages/referral";

describe("Referral page", () => {
  test("Referral page matches snapshot", () => {
    const { asFragment } = render(<Referral />);
    expect(asFragment()).toMatchSnapshot();
  });
});
