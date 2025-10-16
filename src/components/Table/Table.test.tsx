import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './Table';

describe('Table Component', () => {
  test('renders table and is visible', () => {
    render(
      <Table>
        <tbody>
          <tr><td>Sample Cell</td></tr>
        </tbody>
      </Table>
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeVisible();
  });

  test('changes background color when disabled', () => {
    render(
      <Table disabled>
        <tbody>
          <tr><td>Sample Cell</td></tr>
        </tbody>
      </Table>
    );
    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('background-color: #cccccc');
  });
});
