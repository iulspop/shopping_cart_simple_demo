import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

function setup(component) {
  return {
    user: userEvent.setup(),
    ...render(component),
  }
}

test('App', () => {
  const { user } = setup(<App />)

  screen.getByText()
  user.click()
  expect().to
})
