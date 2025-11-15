import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

test('renders navigation', () => {
  render(<App />, { wrapper: MemoryRouter })
  expect(screen.getByText(/Harvest Hive/i)).toBeInTheDocument()
})
