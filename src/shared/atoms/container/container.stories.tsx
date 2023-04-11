import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import Container from ".";

export default {
  title: "Atoms/Container",
  component: Container,
} as Meta<typeof Container>;

type Story = StoryObj<typeof Container> & { children: ReactNode };

export const ContainerComponent = {
  render: ({ children, ...args }: Story) => (
    <Container {...args}>{children}</Container>
  ),
  args: {
    children: <h1>Hello world</h1>,
  },
};
