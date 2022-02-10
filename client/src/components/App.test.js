import { render, screen } from '@testing-library/react'

import App from './App'

test('loads product list on render', async () => {
  render(<App />)

  expect(await screen.findByText('Amazon Kindle E-reader')).toBeInTheDocument()
  expect(await screen.findByText('Apple 10.5-Inch iPad Pro')).toBeInTheDocument()
})
