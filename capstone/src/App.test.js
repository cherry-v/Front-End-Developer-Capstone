import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon logo', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const logoElement = screen.getByAltText(/little lemon logo/i);
  expect(logoElement).toBeInTheDocument();
});
