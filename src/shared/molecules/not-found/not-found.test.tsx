import NotFound from ".";
import { render } from "@testing-library/react";

it("sould check whether no data text present in the dom or not", () => {
  const { getByAltText } = render(<NotFound />);

  expect(getByAltText("No data")).toBeInTheDocument();
});
