import { render } from "./test-utils";

import Corporate from "../pages/corporate";

describe("Corporate Page", () => {
  test("Corporate page matches snapshot", () => {
    const { asFragment } = render(<Corporate />);
    expect(asFragment()).toMatchSnapshot();
  });
});
