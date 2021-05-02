import { render } from "./test-utils";

import DueDilligence from "../pages/due-dilligence";

describe("Due dilligence page", () => {
  test("Due dilligence page matches snapshot", () => {
    const { asFragment } = render(<DueDilligence />);
    expect(asFragment()).toMatchSnapshot();
  });
});
