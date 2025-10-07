import React from 'react';
import { render, screen } from '@testing-library/react';
import Img from './Img';

describe('Img Component', () => {
  test('Img is visible with src and alt', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Test Image" />);
    expect(screen.getByAltText('Test Image')).toBeVisible();
  });

  test('Img changes opacity when disabled', () => {
    render(<Img src="https://via.placeholder.com/150" alt="Disabled Image" disabled />);
    const image = screen.getByAltText('Disabled Image');
    expect(image).toHaveStyle('opacity: 0.6');
  });
});

