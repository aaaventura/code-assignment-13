import React from 'react';
import TableCell from './TableCell';
import { TableCellProps } from './TableCell.types';

export default {
  title: 'Components/TableCell',
  component: TableCell,
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TableCellProps) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...args} />
      </tr>
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Cell Content',
  backgroundColor: '#fff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Cell',
  backgroundColor: '#fff',
  disabled: true,
};

