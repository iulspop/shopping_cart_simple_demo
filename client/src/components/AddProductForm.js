import { useState } from 'react'
import axios from 'axios'

const AddProductForm = ({ onAddProduct }) => {
  const [formIsVisible, setFormIsVisible] = useState(false)

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    onAddProduct(
      {
        title: productName,
        price: productPrice,
        quantity: productQuantity,
      },
      clearForm
    )
  }

  const clearForm = () => {
    setProductName('')
    setProductPrice('')
    setProductQuantity('')
    setFormIsVisible(false)
  }

  return (
    <div className={formIsVisible ? 'add-form visible' : 'add-form'}>
      <p>
        <a role="button" className="button add-product-button" onClick={() => setFormIsVisible(true)}>
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" onChange={e => setProductName(e.target.value)} id="product-name" value={productName} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" onChange={e => setProductPrice(e.target.value)} id="product-price" value={productPrice} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            onChange={e => setProductQuantity(e.target.value)}
            id="product-quantity"
            value={productQuantity}
          />
        </div>

        <div className="actions form-actions">
          <a role="button" className="button">
            Add
          </a>
          <a role="button" className="button" onClick={clearForm}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
