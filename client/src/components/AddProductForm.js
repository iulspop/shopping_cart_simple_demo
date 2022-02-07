import { useState } from 'react'

const AddProductForm = () => {
  const [formIsVisible, setFormIsVisible] = useState(false)

  return (
    <div className={formIsVisible ? 'add-form visible' : 'add-form'}>
      <p>
        <a role="button" className="button add-product-button" onClick={() => setFormIsVisible(true)}>
          Add A Product
        </a>
      </p>
      <h3>Add Product</h3>
      <form>
        <div className="input-group">
          <label htmlFor="product-name">Product Name</label>
          <input type="text" id="product-name" value="" />
        </div>

        <div className="input-group">
          <label htmlFor="product-price">Price</label>
          <input type="text" id="product-price" value="" />
        </div>

        <div className="input-group">
          <label htmlFor="product-quantity">Quantity</label>
          <input type="text" id="product-quantity" value="" />
        </div>

        <div className="actions form-actions">
          <a role="button" className="button">
            Add
          </a>
          <a role="button" className="button" onClick={() => setFormIsVisible(false)}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
