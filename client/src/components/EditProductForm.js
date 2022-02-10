import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { productEdited } from '../redux/actions/productAction'

const EditProductForm = ({ onCancelEdit, id, title, price, quantity }) => {
  const dispatch = useDispatch()

  const [productName, setProductName] = useState(title)
  const [productPrice, setProductPrice] = useState(price)
  const [productQuantity, setProductQuantity] = useState(quantity)

  const handleEditProduct = async (id, edits, cleanup = () => {}) => {
    const response = await axios.put(`/api/products/${id}`, edits)

    if (response.status === 200) {
      dispatch(productEdited(response.data))
      cleanup()
    }
  }

  const handleSubmit = async e => {
    e.preventDefault()

    handleEditProduct(
      id,
      {
        title: productName,
        price: productPrice,
        quantity: productQuantity,
      },
      onCancelEdit
    )
  }

  return (
    <div className="edit-form" onSubmit={handleSubmit}>
      <h3>Edit Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" onChange={e => setProductName(e.target.value)} value={productName} />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" onChange={e => setProductPrice(e.target.value)} value={productPrice} />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input
            type="text"
            id="product-quantity"
            onChange={e => setProductQuantity(e.target.value)}
            value={productQuantity}
          />
        </div>

        <div className="actions form-actions">
          <button className="button">Update</button>
          <button className="button" onClick={onCancelEdit}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditProductForm
