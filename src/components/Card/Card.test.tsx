import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  test('Card is visible with title and content', () => {
    render(<Card title="Test Title" content="Test Content" />);
    expect(screen.getByText('Test Title')).toBeVisible();
    expect(screen.getByText('Test Content')).toBeVisible();
  });

  test('Card changes background color when disabled', () => {
    render(<Card title="Disabled Card" disabled backgroundColor="#fff" />);
    const container = screen.getByText('Disabled Card').parentElement;
    expect(container).toHaveStyle('background-color: #ccc');
  });
});

