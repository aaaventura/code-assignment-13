import { Meta, StoryObj } from '@storybook/react-webpack5';
import TableRow from './TableRow';

const meta: Meta<typeof TableRow> = {
  title: 'Components/TableRow',
  component: TableRow,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
  args: {
    children: <td>Cell</td>,
    disabled: false,
    bgColor: '#ffffff',
  },
};

export const Disabled: Story = {
  args: {
    children: <td>Cell</td>,
    disabled: true,
    bgColor: '#ffffff',
  },
};
