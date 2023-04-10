import ShimmerColorBlock from ".";
import { StoryObj } from "@storybook/react";

export default {
  title: "Atoms/Shimmer",
  component: ShimmerColorBlock,
};
type Story = StoryObj<typeof ShimmerColorBlock>;

export const ShimmerComponent: Story = {
  render: ({ bg, ...args }) => <ShimmerColorBlock {...args} bg={bg} />,
  args: {
    h: "100px",
    w: "200px",
    bg: "red",
  },
};
