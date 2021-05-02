import { render } from "./test-utils";

import Check from "../pages/check";

describe("Check page", () => {
  test("Check page matches snapshot", () => {
    const { asFragment } = render(<Check />);
    expect(asFragment()).toMatchSnapshot();
  });
});
