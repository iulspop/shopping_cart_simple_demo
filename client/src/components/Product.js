import { useState } from 'react'
import EditProductForm from './EditProductForm'

const Product = ({ title, price, quantity }) => {
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="product">
      <div className="product-details">
        <button className="delete-button">
          <span>X</span>
        </button>
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {isEdit ? (
          <EditProductForm cancelEdit={() => setIsEdit(false)} title={title} price={price} quantity={quantity} />
        ) : (
          <div className="actions product-actions">
            <button className="button add-to-cart">Add to Cart</button>
            <button className="button edit" onClick={() => setIsEdit(true)}>
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
