import NotFound from ".";
import { render } from "@testing-library/react";

test("check not found img tag present in the dom", () => {
  const { getByAltText } = render(<NotFound />);

  expect(getByAltText("No data")).toBeInTheDocument();
});
