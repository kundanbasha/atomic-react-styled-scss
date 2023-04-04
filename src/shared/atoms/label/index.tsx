import { ReactNode } from "react";
import { StyledLabel } from "./label.styles";

type Props = {
  children: ReactNode;
  size?: string;
};

export default function Label({ children, size }: Props) {
  return <StyledLabel size={size}>{children}</StyledLabel>;
}
