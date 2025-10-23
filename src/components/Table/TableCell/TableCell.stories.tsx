import { Meta, StoryObj } from "@storybook/react-webpack5";
import TableCell from "./TableCell";

const meta: Meta<typeof TableCell> = {
  title: "Components/TableCell",
  component: TableCell,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: "Cell Content",
    disabled: false,
    bgColor: "#ffffff",
  },
};

export const Disabled: Story = {
  args: {
    children: "Cell Content",
    disabled: true,
    bgColor: "#ffffff",
  },
};
