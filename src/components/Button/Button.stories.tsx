import React from 'react';
import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    label: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Click Me',
  backgroundColor: '#007bff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  backgroundColor: '#ccc',
  disabled: true,
};

