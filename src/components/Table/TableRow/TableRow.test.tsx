import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow Component', () => {
  test('renders table row and is visible', () => {
    render(<table><tbody><TableRow><td>Cell</td></TableRow></tbody></table>);
    const rowElement = screen.getByRole('row');
    expect(rowElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<table><tbody><TableRow disabled><td>Cell</td></TableRow></tbody></table>);
    const rowElement = screen.getByRole('row');
    expect(rowElement).toHaveStyle('background-color: #cccccc');
  });
});
