import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { ButtonProps } from './Button.types';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text', description: 'Button text' },
    disabled: { control: 'boolean', description: 'Disable the button' },
    bgColor: { control: 'color', description: 'Background color' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    disabled: false,
    bgColor: '#007bff',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Click Me',
    disabled: true,
    bgColor: '#007bff',
  },
};
