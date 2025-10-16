// Button.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: { control: { type: "radio" }, options: ["blue", "gray", "transparent"] },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: "Button", color: "blue", disabled: false };

export const Gray = Template.bind({});
Gray.args = { children: "Button", color: "gray" };

export const Transparent = Template.bind({});
Transparent.args = { children: "Button", color: "transparent" };

export const Disabled = Template.bind({});
Disabled.args = { children: "Button", disabled: true, color: "blue" };
