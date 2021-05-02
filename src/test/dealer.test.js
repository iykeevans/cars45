import { render } from "./test-utils";

import Dealer from "../pages/dealer";

describe("About Page", () => {
  test("About page matches snapshot", () => {
    const { asFragment } = render(<Dealer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
