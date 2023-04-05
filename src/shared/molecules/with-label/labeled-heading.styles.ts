import styled, { CSSProperties } from "styled-components";
import variables from "../../../utils/style-variables";

type Props = {
  direction?: string;
  ml?: string;
};

export const LabeledHeadingWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: ${({ direction }: Pick<Props, "direction">) =>
    direction ? direction : "row"};

  label {
    opacity: 0.5;
  }

  .value {
    color: ${variables.greyDark};
    font-size: 20px;
    line-height: 40px;
  }
`;
