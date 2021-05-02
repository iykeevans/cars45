import { render } from "./test-utils";

import About from "../pages/about";

describe("About Page", () => {
  test("About page matches snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
