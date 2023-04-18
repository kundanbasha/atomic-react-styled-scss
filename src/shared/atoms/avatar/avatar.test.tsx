import Avatar from ".";
import { render } from "@testing-library/react";

it("should render first char of the string", () => {
  const { getByText } = render(<Avatar text="Basha" />);

  expect(getByText("B")).toBeInTheDocument();
});
