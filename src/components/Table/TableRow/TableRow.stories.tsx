import React from 'react';
import TableRow from './TableRow';
import { TableRowProps } from './TableRow.types';

export default {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    cells: { control: 'array' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TableRowProps) => (
  <table>
    <tbody>
      <TableRow {...args} />
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  cells: ['John Doe', '32', 'Engineer'],
  backgroundColor: '#fff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  cells: ['Jane Smith', '29', 'Designer'],
  backgroundColor: '#fff',
  disabled: true,
};

