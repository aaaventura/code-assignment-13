import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  test('Table is visible with headers and rows', () => {
    render(
      <Table
        headers={['Name', 'Age']}
        rows={[['Alice', '30'], ['Bob', '25']]}
      />
    );
    expect(screen.getByText('Name')).toBeVisible();
    expect(screen.getByText('Alice')).toBeVisible();
  });

  test('Table changes background color when disabled', () => {
    render(
      <Table
        headers={['Name']}
        rows={[['Disabled Row']]}
        footer="Disabled Footer"
        backgroundColor="#fff"
        disabled
      />
    );
    const header = screen.getByText('Name').closest('thead');
    expect(header).toHaveStyle('background-color: #ccc');
  });
});

