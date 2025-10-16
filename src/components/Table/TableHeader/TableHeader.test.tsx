import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader Component', () => {
  test('renders table header and is visible', () => {
    render(<TableHeader><tr><th>Header</th></tr></TableHeader>);
    const headerElement = screen.getByRole('columnheader');
    expect(headerElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(<TableHeader disabled><tr><th>Header</th></tr></TableHeader>);
    const headerElement = screen.getByRole('columnheader');
    expect(headerElement).toHaveStyle('background-color: #cccccc');
  });
});
