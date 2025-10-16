import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('renders radio button and is visible', () => {
    render(<RadioButton label="Radio Option" />);
    const labelElement = screen.getByText('Radio Option');
    expect(labelElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<RadioButton label="Radio Option" disabled />);
    const labelElement = screen.getByText('Radio Option');
    expect(labelElement).toHaveStyle('background-color: #cccccc');
  });
});
