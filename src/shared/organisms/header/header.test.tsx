import { getByText, render } from "@testing-library/react";
import Header from "../../organisms/header";
import { BrowserRouter } from "react-router-dom";

const Comp = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

it("should check Quotes text present in the dom", () => {
  const { getByText } = render(<Comp />);

  expect(getByText(/Quotes/i)).toBeInTheDocument();
});

it("should check button present in the dom", () => {
  const { getByRole, getByText } = render(<Comp />);

  expect(getByRole(/button/i)).toBeInTheDocument();
  expect(getByText(/Logout/i)).toBeInTheDocument();
});
