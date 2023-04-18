import { CSSProperties } from "react";
import Label from "../../atoms/label";
import { LabeledHeadingWrap } from "./labeled-heading.styles";

type Props = {
  label: string;
  value: string | null;
  valueId: string;
  labeledFor?: string;
  direction?: string;
  labelSize?: string;
  style?: CSSProperties;
};

export default function LabeledHeading({
  label,
  value,
  valueId,
  labeledFor,
  direction,
  labelSize,
  style,
}: Props) {
  return (
    <LabeledHeadingWrap
      className="label-heading-wrap"
      direction={direction}
      style={style}
    >
      <Label labeledFor={labeledFor} size={labelSize}>
        {label}
      </Label>
      <h3 id={valueId} className="value">
        {value}
      </h3>
    </LabeledHeadingWrap>
  );
}
