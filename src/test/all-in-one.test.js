import { render } from "./test-utils";

import AllInOne from "../pages/all-in-one";

describe("All in one page", () => {
  test("All in one page matches snapshot", () => {
    const { asFragment } = render(<AllInOne />);
    expect(asFragment()).toMatchSnapshot();
  });
});
