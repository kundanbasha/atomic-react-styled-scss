import { CSSProperties, ReactNode } from "react";
import { StyledLabel } from "./label.styles";

type Props = {
  children: ReactNode;
  size?: string;
  labeledFor?: string;
};

export default function Label({ children, size, labeledFor }: Props) {
  return (
    <StyledLabel htmlFor={labeledFor} size={size}>
      {children}
    </StyledLabel>
  );
}
