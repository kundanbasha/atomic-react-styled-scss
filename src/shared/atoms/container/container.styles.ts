import styled from "styled-components";

export const ContainerWrap = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 720px;
  }

  @media screen and (max-width: 480px) {
    width: 420px;
  }

  @media screen and (max-width: 420px) {
    width: 360px;
  }

  @media screen and (max-width: 365px) {
    width: 320px;
  }
`;
