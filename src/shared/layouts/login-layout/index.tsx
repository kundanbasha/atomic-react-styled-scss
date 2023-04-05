import { ReactNode } from "react";
import { LoginWrap } from "./login-layout.styles";
import QuoteSection from "./quote-section";

type Props = {
  children: ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
    <LoginWrap>
      <QuoteSection />
      <div className="form-section">{children}</div>
    </LoginWrap>
  );
}
