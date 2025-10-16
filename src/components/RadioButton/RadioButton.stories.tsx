import { Meta, StoryObj } from '@storybook/react-webpack5';
import RadioButton from './RadioButton';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: { label: 'Radio Option', disabled: false, bgColor: '#ffffff' },
};

export const Disabled: Story = {
  args: { label: 'Radio Option', disabled: true, bgColor: '#ffffff' },
};
