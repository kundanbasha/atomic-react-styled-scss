import { ReactNode } from "react";
import { ContainerWrap } from "./container.styles";

type Props = {
  children: ReactNode;
  className?: string | undefined;
};

export default function Container({ children, className }: Props) {
  return <ContainerWrap className={className}>{children}</ContainerWrap>;
}
