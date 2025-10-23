import { Meta, StoryObj } from "@storybook/react-webpack5";
import Img from "./Img";

const meta: Meta<typeof Img> = {
  title: "Components/Img",
  component: Img,
  argTypes: {
    src: { control: "text" },
    alt: { control: "text" },
    disabled: { control: "boolean" },
    bgColor: { control: "color" },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

export const Default: Story = {
  args: {
    src: "https://via.placeholder.com/200",
    alt: "Image",
    disabled: false,
    bgColor: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    src: "https://via.placeholder.com/200",
    alt: "Image",
    disabled: true,
    bgColor: "transparent",
  },
};
