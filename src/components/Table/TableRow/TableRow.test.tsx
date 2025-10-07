import React from 'react';
import { render, screen } from '@testing-library/react';
import TableRow from './TableRow';

describe('TableRow Component', () => {
  test('TableRow is visible with cells', () => {
    render(<table><tbody><TableRow cells={['Visible Cell']} /></tbody></table>);
    expect(screen.getByText('Visible Cell')).toBeVisible();
  });

  test('TableRow changes background color when disabled', () => {
    render(<table><tbody><TableRow cells={['Disabled Cell']} disabled backgroundColor="#fff" /></tbody></table>);
    const row = screen.getByText('Disabled Cell').closest('tr');
    expect(row).toHaveStyle('background-color: #ccc');
  });
});

