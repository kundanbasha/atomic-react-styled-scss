import styled from "styled-components";
import variables from "../../../utils/style-variables";

export const LoginWrap = styled.div`
  display: flex;
  height: 100vh;
  .quote-section {
    width: calc(100% - 480px);
    background-color: ${variables["red-80"]};
    height: 100%;
    display: flex;
    align-items: center;
  }
  .form-section {
    width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    .quote-section {
      display: none;
    }
    .form-section {
      width: 100%;
    }
  }
`;
