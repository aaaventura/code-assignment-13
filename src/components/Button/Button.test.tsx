import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is visible', () => {
  render(<Button label="Click Me" />);
  expect(screen.getByText('Click Me')).toBeVisible();
});

test('Button changes color when disabled', () => {
  render(<Button label="Disabled" disabled backgroundColor="#007bff" />);
  const button = screen.getByText('Disabled');
  expect(button).toHaveStyle('background-color: #ccc');
});

