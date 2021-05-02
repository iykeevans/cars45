import { render } from "./test-utils";

import Franchise from "../pages/franchise";

describe("Franchise Page", () => {
  test("Franchise page matches snapshot", () => {
    const { asFragment } = render(<Franchise />);
    expect(asFragment()).toMatchSnapshot();
  });
});
