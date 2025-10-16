import { Meta, StoryObj } from '@storybook/react-webpack5';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    disabled: { control: 'boolean' },
    bgColor: { control: 'color' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: { src: 'https://via.placeholder.com/600x300', alt: 'Hero Image', disabled: false, bgColor: 'transparent' },
};

export const Disabled: Story = {
  args: { src: 'https://via.placeholder.com/600x300', alt: 'Hero Image', disabled: true, bgColor: 'transparent' },
};
