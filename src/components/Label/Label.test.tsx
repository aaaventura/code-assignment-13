import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  test('renders label and is visible', () => {
    render(<Label text="Label Text" />);
    const labelElement = screen.getByText('Label Text');
    expect(labelElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Label text="Label Text" disabled />);
    const labelElement = screen.getByText('Label Text');
    expect(labelElement).toHaveStyle('background-color: #cccccc');
  });
});
