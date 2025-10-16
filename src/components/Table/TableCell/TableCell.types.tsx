import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  test('renders table cell and is visible', () => {
    render(<table><tbody><tr><TableCell>Cell Content</TableCell></tr></tbody></table>);
    const cellElement = screen.getByRole('cell');
    expect(cellElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<table><tbody><tr><TableCell disabled>Cell Content</TableCell></tr></tbody></table>);
    const cellElement = screen.getByRole('cell');
    expect(cellElement).toHaveStyle('background-color: #cccccc');
  });
});
