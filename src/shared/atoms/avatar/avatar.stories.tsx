import Avatar from ".";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Atoms/Avatar",
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const AvatarComponent: Story = {
  render: ({ text, ...args }) => (
    <div style={{ backgroundColor: text ? "skyblue" : "transparent" }}>
      <Avatar
        text={text}
        fontSize={args.height === args.width ? "10px" : "48px"}
        {...args}
      />
    </div>
  ),
  args: {
    text: "Basha",
    height: "100px",
    width: "100px",
  },
};
