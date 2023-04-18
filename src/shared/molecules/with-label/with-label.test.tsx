import LabelInput from "./label-input";
import { render } from "@testing-library/react";

test("check label heading", () => {
  const { getByLabelText } = render(<LabelInput />);

  expect(getByLabelText(/Label/i)).toBeInTheDocument();
});
