import React from 'react';
import { render, screen } from '@testing-library/react';
import Label from './Label';

describe('Label Component', () => {
  test('Label is visible with text', () => {
    render(<Label text="Visible Label" />);
    expect(screen.getByText('Visible Label')).toBeVisible();
  });

  test('Label changes color when disabled', () => {
    render(<Label text="Disabled Label" disabled color="#000" />);
    const label = screen.getByText('Disabled Label');
    expect(label).toHaveStyle('color: #999');
  });
});

