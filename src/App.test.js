import { render, screen } from '@testing-library/react';
import App from './App';
import ReactDOM from 'react-dom';

import { createRoot } from 'react-dom';
import ReactTestUtils, { act } from 'react-dom/test-utils'; // ES6


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const reactRoot = createRoot(div);
  reactRoot.render(<App />);
});
