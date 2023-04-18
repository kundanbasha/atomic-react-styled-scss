import { fireEvent, render } from "@testing-library/react";
import Input from ".";

it("should test input value", () => {
  const value = "Value check";
  const { getByDisplayValue } = render(<Input defaultValue={value} />);

  expect(getByDisplayValue(value)).toBeInTheDocument();
});

it("should test on change functionality of input", () => {
  const { getByPlaceholderText } = render(
    <Input placeholder="username" name="username" defaultValue="Hey" />
  );

  const usernameElement = getByPlaceholderText("username");

  expect(usernameElement).toHaveDisplayValue("Hey");
  fireEvent.change(usernameElement, { target: { value: "Basha" } });
  expect(usernameElement).toHaveDisplayValue("Basha");
});
