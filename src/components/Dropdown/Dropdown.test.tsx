import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('Dropdown is visible with options', () => {
    render(<Dropdown options={['Option 1', 'Option 2']} />);
    expect(screen.getByRole('combobox')).toBeVisible();
    expect(screen.getByText('Option 1')).toBeVisible();
  });

  test('Dropdown changes background color when disabled', () => {
    render(<Dropdown options={['Disabled']} disabled backgroundColor="#fff" />);
    const select = screen.getByRole('combobox');
    expect(select).toHaveStyle('background-color: #ccc');
  });
});

