import React from 'react';
import TableFooter from './TableFooter';
import { TableFooterProps } from './TableFooter.types';

export default {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    content: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TableFooterProps) => (
  <table>
    <TableFooter {...args} />
  </table>
);

export const Default = Template.bind({});
Default.args = {
  content: 'Table Footer Content',
  backgroundColor: '#f5f5f5',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Disabled Footer',
  backgroundColor: '#f5f5f5',
  disabled: true,
};

