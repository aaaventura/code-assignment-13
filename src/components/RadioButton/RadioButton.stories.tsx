import React, { useState } from 'react';
import RadioButton from './RadioButton';
import { RadioButtonProps } from './RadioButton.types';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: RadioButtonProps) => {
  const [selected, setSelected] = useState(args.checked ? args.value : '');
  return (
    <RadioButton
      {...args}
      checked={selected === args.value}
      onChange={setSelected}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'Option A',
  name: 'group1',
  value: 'A',
  checked: false,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Option',
  name: 'group1',
  value: 'B',
  checked: false,
  disabled: true,
};

