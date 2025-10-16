import React from 'react';
import { render, screen } from '@testing-library/react';
import Text from './Text';

describe('Text Component', () => {
  test('renders text and is visible', () => {
    render(<Text>Text Content</Text>);
    const textElement = screen.getByText('Text Content');
    expect(textElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Text disabled>Text Content</Text>);
    const textElement = screen.getByText('Text Content');
    expect(textElement).toHaveStyle('background-color: #cccccc');
  });
});
