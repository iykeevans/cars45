import { render } from "./test-utils";

import RideHailing from "../pages/ride-hailing";

describe("Ride hailing page", () => {
  test("Ride hailing page matches snapshot", () => {
    const { asFragment } = render(<RideHailing />);
    expect(asFragment()).toMatchSnapshot();
  });
});
