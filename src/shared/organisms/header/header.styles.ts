import styled from "styled-components";
import variables from "../../../utils/style-variables";

export const HeaderWrap = styled.header`
  background-color: ${variables.red};
  position: sticky;
  z-index: 2;
  top: 0;
  padding: 12px 0;
  margin-bottom: 24px;

  .quotes-title {
    text-decoration: none;
  }

  h1 {
    color: white;
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
  }

  @keyframes crescendo {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.5);
    }
  }

  .button-group {
    display: flex;
    align-items: center;
    gap: 32px;
    svg {
      height: 28px;
      width: fit-content;
      animation: crescendo 1.3s alternate infinite ease-in;
      path {
        fill: ${variables.grey};
        &:hover {
          fill: ${variables.greyDark};
        }
      }
    }
  }
`;
