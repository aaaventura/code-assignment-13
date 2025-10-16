import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableFooter from './TableFooter';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/TableFooter',
  component: TableFooter,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof TableFooter>;

export const Default: Story = {
  args: {
    children: <tr><td>Footer</td></tr>,
    disabled: false,
    bgColor: '#f0f0f0',
  },
};

export const Disabled: Story = {
  args: {
    children: <tr><td>Footer</td></tr>,
    disabled: true,
    bgColor: '#f0f0f0',
  },
};
