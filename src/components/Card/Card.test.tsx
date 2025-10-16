import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('renders card and is visible', () => {
    render(<Card>Card Content</Card>);
    const cardElement = screen.getByText('Card Content');
    expect(cardElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Card disabled>Card Content</Card>);
    const cardElement = screen.getByText('Card Content');
    expect(cardElement).toHaveStyle('background-color: #cccccc');
  });
});
