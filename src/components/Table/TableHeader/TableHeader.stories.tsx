import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableHeader from './TableHeader';

const meta: Meta<typeof TableHeader> = {
  title: 'Components/TableHeader',
  component: TableHeader,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
  args: {
    children: <tr><th>Header</th></tr>,
    disabled: false,
    bgColor: '#f0f0f0',
  },
};

export const Disabled: Story = {
  args: {
    children: <tr><th>Header</th></tr>,
    disabled: true,
    bgColor: '#f0f0f0',
  },
};
