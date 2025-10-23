import { Meta, StoryObj } from "@storybook/react-webpack5";
import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { children: "Card Content", disabled: false, bgColor: "#ffffff" },
};

export const Disabled: Story = {
  args: { children: "Card Content", disabled: true, bgColor: "#ffffff" },
};
