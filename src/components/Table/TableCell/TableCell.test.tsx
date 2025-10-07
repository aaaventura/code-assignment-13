import React from 'react';
import { render, screen } from '@testing-library/react';
import TableCell from './TableCell';

describe('TableCell Component', () => {
  test('TableCell is visible with content', () => {
    render(<table><tbody><tr><TableCell content="Visible Cell" /></tr></tbody></table>);
    expect(screen.getByText('Visible Cell')).toBeVisible();
  });

  test('TableCell changes background color when disabled', () => {
    render(<table><tbody><tr><TableCell content="Disabled Cell" disabled backgroundColor="#fff" /></tr></tbody></table>);
    const cell = screen.getByText('Disabled Cell');
    expect(cell).toHaveStyle('background-color: #ccc');
  });
});

