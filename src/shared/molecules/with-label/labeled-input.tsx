import { ReactNode } from "react";
import { Label } from "../../atoms";
import { LabeledHeadingWrap } from "./labeled-heading.styles";

type Props = {
  label: string;
  children: ReactNode;
  direction?: string;
  labelSize?: string;
};

export default function LabeledInput({
  label,
  children,
  direction,
  labelSize,
}: Props) {
  return (
    <LabeledHeadingWrap className="label-heading-wrap" direction={direction}>
      <Label size={labelSize}>{label}</Label>
      {children}
    </LabeledHeadingWrap>
  );
}
