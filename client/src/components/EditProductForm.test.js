import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import EditProductForm from './EditProductForm'

describe('EditProductForm', () => {
  let props, nameInput, priceInput, quantityInput

  beforeEach(() => {
    props = {
      id: '6202bcc6cee6f53cf35dcc44',
      title: 'Amazon Kindle E-reader',
      quantity: 20,
      price: 79.99,
      onEditProduct: jest.fn(),
      onCancelEdit: jest.fn(),
    }

    render(<EditProductForm {...props} />)
    nameInput = screen.getByLabelText('Product Name')
    priceInput = screen.getByLabelText('Price')
    quantityInput = screen.getByLabelText('Quantity')
  })

  test('Form is populated with product info', () => {
    expect(nameInput.value).toBe(props.title)
    expect(priceInput.value).toBe(props.price.toString())
    expect(quantityInput.value).toBe(props.quantity.toString())
  })

  test('Submitting form calls onEditProduct with correct values', () => {
    const updateButton = screen.getByRole('button', { name: /update/i })
    userEvent.click(updateButton)

    expect(props.onEditProduct.mock.calls[0][0]).toBe(props.id)
    expect(props.onEditProduct.mock.calls.length).toBe(1)
    expect(props.onEditProduct.mock.calls[0][1]).toEqual({
      title: props.title,
      price: props.price,
      quantity: props.quantity,
    })
  })

  test('Submitting form with updated fields submits the new values', () => {
    const updateButton = screen.getByRole('button', { name: /update/i })
    userEvent.clear(nameInput)
    userEvent.type(nameInput, 'New Item')
    userEvent.click(updateButton)

    expect(props.onEditProduct.mock.calls[0][0]).toBe(props.id)
    expect(props.onEditProduct.mock.calls.length).toBe(1)
    expect(props.onEditProduct.mock.calls[0][1]).toEqual({
      title: 'New Item',
      price: props.price,
      quantity: props.quantity,
    })
  })
})
