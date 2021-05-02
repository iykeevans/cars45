import { render } from "./test-utils";

import Import from "../pages/import";

describe("Import page", () => {
  test("Import page matches snapshot", () => {
    const { asFragment } = render(<Import />);
    expect(asFragment()).toMatchSnapshot();
  });
});
