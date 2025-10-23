import { Meta, StoryObj } from "@storybook/react-webpack5";
import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    children: <option>Option 1</option>,
    disabled: false,
    bgColor: "#ffffff",
  },
};

export const Disabled: Story = {
  args: {
    children: <option>Option 1</option>,
    disabled: true,
    bgColor: "#ffffff",
  },
};
