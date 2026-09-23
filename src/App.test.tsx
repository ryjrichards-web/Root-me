import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('ROOT ME', () => {
  it('renders the dashboard and tagline personality', () => {
    render(<App />);
    expect(screen.getByText('Morning, dirt lover.')).toBeInTheDocument();
    expect(screen.getAllByText('Needs your love').length).toBeGreaterThan(0);
  });
});
