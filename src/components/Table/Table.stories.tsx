import React from 'react';
import Table from './Table';
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: { control: 'array' },
    rows: { control: 'object' },
    footer: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TableProps) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  headers: ['Name', 'Age', 'Role'],
  rows: [
    ['Alice', '30', 'Engineer'],
    ['Bob', '25', 'Designer'],
  ],
  footer: 'End of Table',
  backgroundColor: '#f5f5f5',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  headers: ['Name', 'Age', 'Role'],
  rows: [
    ['Charlie', '28', 'Manager'],
    ['Dana', '35', 'Developer'],
  ],
  footer: 'Disabled Table',
  backgroundColor: '#f5f5f5',
  disabled: true,
};

