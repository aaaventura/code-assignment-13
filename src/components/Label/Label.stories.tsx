import React from 'react';
import Label from './Label';
import { LabelProps } from './Label.types';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: LabelProps) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'This is a label',
  color: '#333',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled label',
  color: '#333',
  disabled: true,
};

