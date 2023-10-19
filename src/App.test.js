import { render, screen } from '@testing-library/react';
import App from './App';

import { createRoot } from 'react-dom/client';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

var x = 1 + 1;

it('renders without crashing', () => {
  const div = document.createElement('div');
  const reactRoot = createRoot(div);
  reactRoot.render(<App />);
});
