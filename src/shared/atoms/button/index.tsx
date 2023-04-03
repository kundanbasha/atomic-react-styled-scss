import React from "react";
import { StyledButton } from "./button.style";

function Button({
  children,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
