import styled from "styled-components";
import variables from "../../../utils/style-variables";

type Props = {
  direction?: string;
};

export const LabeledHeadingWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }: Pick<Props, "direction">) =>
    direction ? direction : "row"};

  .value {
    color: ${variables.greyDark};
  }
`;
