import { getByText, render } from "@testing-library/react";
import Header from "../../organisms/header";
import { BrowserRouter } from "react-router-dom";

const Comp = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

test("check Quotes text present in the dom", () => {
  const { getByText } = render(<Comp />);

  expect(getByText(/Quotes/i)).toBeInTheDocument();
});

test("check button present in the dom", () => {
  const { getByRole, getByText } = render(<Comp />);

  expect(getByRole(/button/i)).toBeInTheDocument();
  expect(getByText(/Logout/i)).toBeInTheDocument();
});
