import Button from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export const ButtonComponent = {
  args: {
    children: "Button",
  },
};
