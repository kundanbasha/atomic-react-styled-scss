import { render } from "@testing-library/react";
import Blockquote from ".";

const quote = "Where there is a win, there is a way";

it("should test the quote should be in the dom", () => {
  const { getByText } = render(<Blockquote>{quote}</Blockquote>);

  expect(getByText(quote)).toBeInTheDocument();
});
