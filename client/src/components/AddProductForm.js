import { useState } from 'react'

const AddProductForm = () => {
  const [formIsVisible, setFormIsVisible] = useState(false)

  return (
    <div className={formIsVisible ? 'add-form visible' : 'add-form'}>
      <p>
        <button className="button add-product-button" onClick={() => setFormIsVisible(true)}>
          Add A Product
        </button>
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
          <button className="button">Add</button>
          <button className="button" onClick={() => setFormIsVisible(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddProductForm
