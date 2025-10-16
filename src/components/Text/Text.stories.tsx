import { Meta, StoryObj } from '@storybook/react-webpack5';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: { children: 'Text Content', disabled: false, bgColor: '#ffffff' },
};

export const Disabled: Story = {
  args: { children: 'Text Content', disabled: true, bgColor: '#ffffff' },
};
