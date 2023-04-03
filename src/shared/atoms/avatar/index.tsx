import styled from "styled-components";
import variables from "../../../utils/style-variables";
type Props = {
  text: string;
  height?: string | undefined;
  width?: string | undefined;
  fontSize?: string | undefined;
};

const AvatarWrap: any = styled.div`
  height: ${({ height }: any) => (height ? height : "48px")};
  width: ${({ width }: { width: string }) => (width ? width : "48px")};
  font-size: ${({ fontSize }: any) => (fontSize ? fontSize : "14px")};
  background-color: ${variables.red};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font-weight: bold;
`;

export default function Avatar({ text, height, width, fontSize }: Props) {
  return (
    <AvatarWrap fontSize={fontSize} height={height} width={width}>
      {getFirstChar(text)}
    </AvatarWrap>
  );
}

const getFirstChar = (text: string) => {
  if (!text) return "B";

  return text.charAt(0);
};
