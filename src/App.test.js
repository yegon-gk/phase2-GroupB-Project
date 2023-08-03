// Import the necessary testing libraries
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import MyComponent from './MyComponent'; // Replace with your component path

test('renders the component with the correct text content', () => {
  render(<MyComponent />);
  const element = screen.getByText(/Hello, World/i);
  expect(element).toBeInTheDocument();
});
