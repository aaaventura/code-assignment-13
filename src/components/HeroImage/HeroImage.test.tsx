import React from 'react';
import { render, screen } from '@testing-library/react';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('HeroImage is visible with overlay text', () => {
    render(<HeroImage src="https://via.placeholder.com/800x300" overlayText="Welcome" />);
    expect(screen.getByText('Welcome')).toBeVisible();
  });

  test('HeroImage changes opacity when disabled', () => {
    render(<HeroImage src="https://via.placeholder.com/800x300" overlayText="Restricted" disabled />);
    const container = screen.getByText('Restricted').parentElement;
    expect(container).toHaveStyle('opacity: 0.6');
  });
});

