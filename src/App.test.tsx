import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('ROOT ME', () => {
  it('renders the dashboard and tagline personality', () => {
    render(<App />);
    expect(screen.getByText('Morning, dirt lover.')).toBeInTheDocument();
    expect(screen.getAllByText('Needs your love').length).toBeGreaterThan(0);
  });

  it('switches every dashboard section to the selected garden', () => {
    render(<App />);
    expect(screen.getByText('Big Red')).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText('Current garden'), { target: { value: 'Mum’s House' } });
    expect(screen.getByText('Courgette Clooney')).toBeInTheDocument();
    expect(screen.queryByText('Big Red')).not.toBeInTheDocument();
    expect(screen.getByLabelText('Weather for Mum’s House')).toHaveTextContent('Set Mum’s location');
  });
});
