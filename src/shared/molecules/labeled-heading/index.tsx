import Label from "../../atoms/label";
import { LabeledHeadingWrap } from "./labeled-heading.styles";

type Props = {
  label: string;
  value: string | null;
  direction?: string;
  labelSize?: string;
};

export default function LabeledHeading({
  label,
  value,
  direction,
  labelSize,
}: Props) {
  return (
    <LabeledHeadingWrap className="label-heading-wrap" direction={direction}>
      <Label size={labelSize}>{label}</Label>
      <h3 className="value">{value}</h3>
    </LabeledHeadingWrap>
  );
}
