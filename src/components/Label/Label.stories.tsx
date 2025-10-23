import { Meta, StoryObj } from "@storybook/react-webpack5";
import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  argTypes: {
    text: { control: "text" },
    disabled: { control: "boolean" },
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { text: "Label Text", disabled: false, bgColor: "#ffffff" },
};

export const Disabled: Story = {
  args: { text: "Label Text", disabled: true, bgColor: "#ffffff" },
};
