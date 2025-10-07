import React from 'react';
import HeroImage from './HeroImage';
import { HeroImageProps } from './HeroImage.types';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    overlayText: { control: 'text' },
    height: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

const Template = (args: HeroImageProps) => <HeroImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/800x300',
  alt: 'Hero Banner',
  overlayText: 'Welcome to the Site',
  height: '300px',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: 'https://via.placeholder.com/800x300',
  alt: 'Disabled Hero',
  overlayText: 'Access Restricted',
  height: '300px',
  disabled: true,
};

