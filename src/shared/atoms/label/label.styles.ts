import styled from "styled-components";
import variables from "../../../utils/style-variables";

type Props = {
  size?: string;
  for?: string | undefined;
};
export const StyledLabel = styled.label`
  font-size: ${({ size }: Pick<Props, "size">) => (size ? size : "12px")};
  color: ${variables.grey};
  padding-right: 8px;
`;
