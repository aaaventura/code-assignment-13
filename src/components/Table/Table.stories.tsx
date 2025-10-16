import { Meta, StoryObj } from '@storybook/react-webpack5';
import Table from './Table';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    children: (
      <tbody>
        <tr><td>Sample Cell</td></tr>
      </tbody>
    ),
    disabled: false,
    bgColor: '#ffffff',
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <tbody>
        <tr><td>Sample Cell</td></tr>
      </tbody>
    ),
    disabled: true,
    bgColor: '#ffffff',
  },
};
