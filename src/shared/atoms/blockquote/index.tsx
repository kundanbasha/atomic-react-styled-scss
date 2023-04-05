import { StyledBlockquote } from "./blockquote.styles";

type QuoteProps = {
  children: string;
  size?: string;
};

export default function Blockquote({ children, size }: QuoteProps) {
  return <StyledBlockquote size={size}>{children}</StyledBlockquote>;
}
