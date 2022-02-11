import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { productAdded } from '../redux/actions/productAction'

const AddProductForm = () => {
  const dispatch = useDispatch()
  const [formIsVisible, setFormIsVisible] = useState(false)

  const [productName, setProductName] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [productQuantity, setProductQuantity] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    dispatch(
      productAdded(
        {
          title: productName,
          price: productPrice,
          quantity: productQuantity,
        },
        clearForm
      )
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
        <button className="button add-product-button" onClick={() => setFormIsVisible(true)}>
          Add A Product
        </button>
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
          <button className="button">Add</button>
          <button className="button" onClick={clearForm}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
