import { render, screen } from '@testing-library/react'

import EditProductForm from './EditProductForm'

const props = {
  id: '6202bcc6cee6f53cf35dcc44',
  title: 'Amazon Kindle E-reader',
  quantity: 20,
  price: 79.99,
  onEditProduct: jest.fn(),
  onCancelEdit: jest.fn(),
}

describe('EditProductForm', () => {
  test('Form is populated with product info', async () => {
    render(<EditProductForm {...props} />)

    const nameInput = screen.getByLabelText('Product Name')
    const priceInput = screen.getByLabelText('Price')
    const quantityInput = screen.getByLabelText('Quantity')

    expect(nameInput.value).toBe(props.title)
    expect(priceInput.value).toBe(props.price.toString())
    expect(quantityInput.value).toBe(props.quantity.toString())
  })
})
