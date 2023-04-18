import { render } from "@testing-library/react";
import Label from ".";

it("should test label is exist in the dom", () => {
  const username = "Username";
  const { getByText } = render(<Label>{username}</Label>);

  expect(getByText(username)).toBeInTheDocument();
});
