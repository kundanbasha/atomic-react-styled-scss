import Input from ".";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    onChange: {
      action: "change",
    },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const InputComponent: Story = {
  args: {
    placeholder: "Enter String",
    type: "text",
  },
};
