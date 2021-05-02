import { render } from "./test-utils";

import PrivateIndividual from "../pages/private-individual";

describe("Private individual page", () => {
  test("Private individual page matches snapshot", () => {
    const { asFragment } = render(<PrivateIndividual />);
    expect(asFragment()).toMatchSnapshot();
  });
});
