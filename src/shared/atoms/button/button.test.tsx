import { fireEvent, render } from "@testing-library/react";
import Button from ".";

it("should check Button test", () => {
  const buttonText = "Submit";
  const { getByRole } = render(<Button>{buttonText}</Button>);

  expect(getByRole("button")).toBeInTheDocument();
});

it("should test number of times on click func called", () => {
  const handleClick = jest.fn();
  const { getByRole } = render(<Button onClick={handleClick}>Submit</Button>);

  fireEvent.click(getByRole("button"));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
