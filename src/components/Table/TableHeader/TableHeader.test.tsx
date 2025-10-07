import React from 'react';
import { render, screen } from '@testing-library/react';
import TableHeader from './TableHeader';

describe('TableHeader Component', () => {
  test('TableHeader is visible with headers', () => {
    render(<table><TableHeader headers={['Name', 'Age']} /></table>);
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Age')).toBeVisible();
  });

  test('TableHeader changes background color when disabled', () => {
    render(<table><TableHeader headers={['Name']} disabled backgroundColor="#fff" /></table>);
    const header = screen.getByText('Name').closest('thead');
    expect(header).toHaveStyle('background-color: #ccc');
  });
});

