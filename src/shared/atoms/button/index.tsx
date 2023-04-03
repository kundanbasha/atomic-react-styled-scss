import { ReactNode } from "react";
import "./button.style.scss";

function Button({ children }: Props) {
  return <button>{children}</button>;
}

export default Button;

type Props = {
  children: ReactNode;
};
