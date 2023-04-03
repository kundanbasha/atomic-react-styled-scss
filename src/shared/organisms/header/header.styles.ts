import styled from "styled-components";
import variables from "../../../utils/style-variables";

export const HeaderWrap = styled.header`
  background-color: ${variables.red};

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
    gap: 12px;
  }
`;
