import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { DropdownProps } from './Dropdown.types';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: { control: 'array' },
    selected: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: DropdownProps) => {
  const [selected, setSelected] = useState(args.selected || '');
  return (
    <Dropdown {...args} selected={selected} onChange={setSelected} />
  );
};

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  selected: 'Option 1',
  backgroundColor: '#fff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option A', 'Option B'],
  selected: 'Option A',
  backgroundColor: '#fff',
  disabled: true,
};

