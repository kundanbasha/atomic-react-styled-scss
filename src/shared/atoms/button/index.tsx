import React from "react";
import "./button.style.scss";

function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button {...rest}>{children}</button>;
}

export default Button;
