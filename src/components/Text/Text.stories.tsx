import React from 'react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    content: { control: 'text' },
    fontSize: { control: 'text' },
    color: { control: 'color' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: TextProps) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'This is a paragraph of text.',
  fontSize: '16px',
  color: '#333',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: 'This text is disabled.',
  fontSize: '16px',
  color: '#333',
  disabled: true,
};

