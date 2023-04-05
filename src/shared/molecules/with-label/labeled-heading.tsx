import { CSSProperties } from "react";
import Label from "../../atoms/label";
import { LabeledHeadingWrap } from "./labeled-heading.styles";

type Props = {
  label: string;
  value: string | null;
  direction?: string;
  labelSize?: string;
  style?: CSSProperties;
};

export default function LabeledHeading({
  label,
  value,
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
      <Label size={labelSize}>{label}</Label>
      <h3 className="value">{value}</h3>
    </LabeledHeadingWrap>
  );
}
