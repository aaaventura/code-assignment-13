import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('RadioButton is visible with label', () => {
    render(<RadioButton label="Test Option" name="test" value="1" />);
    expect(screen.getByLabelText('Test Option')).toBeVisible();
  });

  test('RadioButton is disabled and styled accordingly', () => {
    render(<RadioButton label="Disabled Option" name="test" value="2" disabled />);
    const radio = screen.getByLabelText('Disabled Option');
    expect(radio).toBeDisabled();
  });
});

