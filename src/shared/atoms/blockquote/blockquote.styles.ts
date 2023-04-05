import styled from "styled-components";
import variables from "../../../utils/style-variables";

export const StyledBlockquote = styled.blockquote`
  font-weight: 100;
  font-size: ${({ size }: { size?: string }) => (size ? size : "1.5rem")};
  line-height: 1.4;
  width: 80%;
  position: relative;
  margin: 0;
  padding: 4.5rem 0 2rem 6rem;
  font-family: Special Elite;
  color: ${variables.greyDark};

  &:before,
  &:after {
    position: absolute;
    color: #f1efe6;
    font-size: 8rem;
    width: 4rem;
    height: 4rem;
  }

  &:before {
    content: "“";
    left: 1rem;
    top: 0rem;
  }

  &:after {
    content: "”";
    right: -5rem;
    bottom: 1rem;
  }
`;
