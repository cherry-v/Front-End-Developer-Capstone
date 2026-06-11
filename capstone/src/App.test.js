import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Little Lemon logo', () => {
  render(<App />);
  const logoElement = screen.getByAltText(/little lemon logo/i);
  expect(logoElement).toBeInTheDocument();
});
