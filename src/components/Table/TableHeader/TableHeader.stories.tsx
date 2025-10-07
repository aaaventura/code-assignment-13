import React from 'react';
import TableHeader from './TableHeader';
import { TableHeaderProps } from './TableHeader.types';

export default {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    headers: { control: 'array' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TableHeaderProps) => (
  <table>
    <TableHeader {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Occupation'],
  backgroundColor: '#f5f5f5',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ['Name', 'Age', 'Occupation'],
  backgroundColor: '#f5f5f5',
  disabled: true,
};

