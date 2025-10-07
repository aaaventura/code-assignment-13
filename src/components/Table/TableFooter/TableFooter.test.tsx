import React from 'react';
import { render, screen } from '@testing-library/react';
import TableFooter from './TableFooter';

describe('TableFooter Component', () => {
  test('TableFooter is visible with content', () => {
    render(<table><TableFooter content="Footer Text" /></table>);
    expect(screen.getByText('Footer Text')).toBeVisible();
  });

  test('TableFooter changes background color when disabled', () => {
    render(<table><TableFooter content="Disabled Footer" disabled backgroundColor="#fff" /></table>);
    const footer = screen.getByText('Disabled Footer').closest('tfoot');
    expect(footer).toHaveStyle('background-color: #ccc');
  });
});

