import React from 'react';
import Card from './Card';
import { CardProps } from './Card.types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    imageSrc: { control: 'text' },
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: CardProps) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'This is the card content.',
  imageSrc: 'https://via.placeholder.com/400x200',
  backgroundColor: '#fff',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled.',
  imageSrc: 'https://via.placeholder.com/400x200',
  backgroundColor: '#fff',
  disabled: true,
};

