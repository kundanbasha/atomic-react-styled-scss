import styled from "styled-components";
import variables from "../../../utils/style-variables";

export const HeaderWrap = styled.header`
  background-color: ${variables.red};
  position: sticky;
  z-index: 2;
  top: 0;
  padding: 12px 0;

  h1 {
    color: white;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }

  .button-group {
    display: flex;
    align-items: center;
    gap: 24px;
    svg {
      height: 28px;
      width: fit-content;
      path {
        fill: ${variables.grey};
        &:hover {
          fill: ${variables.greyDark};
        }
      }
    }
  }
`;
