import LabelInput from "./label-input";
import LabeledInput from "./labeled-input";
import { render } from "@testing-library/react";

it("should check label heading", () => {
  const { getByLabelText } = render(<LabelInput />);

  expect(getByLabelText(/Label/i)).toBeInTheDocument();
});
