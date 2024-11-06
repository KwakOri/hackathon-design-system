import type { Meta, StoryObj } from "@storybook/react";

import Label from "../components/Label/Label";

const meta = {
  title: "Input/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { description: "연결되는 input tag의 id값" },
    children: { description: "label에 표시될 값" },
  },
  args: {},
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    htmlFor: "button",
    children: "버튼",
  },
};
