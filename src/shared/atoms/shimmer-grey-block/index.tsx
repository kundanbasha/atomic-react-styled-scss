import styled from "styled-components";
import variables from "../../../utils/style-variables";

type Props = {
  w?: string;
  h?: string;
  bg?: string;
};

const ShimmerColorBlock = styled.div<Props>`
  height: ${({ h }: Pick<Props, "h">) => (h ? h : "100%")};
  width: ${({ w }: Pick<Props, "w">) => (w ? w : "100%")};
  background-color: ${({ bg }: Pick<Props, "bg">) =>
    bg ? bg : variables.shimmerGrey};
`;

export default ShimmerColorBlock;
