import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('renders dropdown and is visible', () => {
    render(<Dropdown><option>Option 1</option></Dropdown>);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<Dropdown disabled><option>Option 1</option></Dropdown>);
    const dropdownElement = screen.getByRole('combobox');
    expect(dropdownElement).toHaveStyle('background-color: #cccccc');
  });
});
