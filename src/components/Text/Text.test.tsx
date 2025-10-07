import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('Text is visible with content', () => {
    render(<Text content="Visible text" />);
    expect(screen.getByText('Visible text')).toBeVisible();
  });

  test('Text changes color when disabled', () => {
    render(<Text content="Disabled text" disabled color="#000" />);
    const textElement = screen.getByText('Disabled text');
    expect(textElement).toHaveStyle('color: #999');
  });
});

