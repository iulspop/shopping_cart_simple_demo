import { useState } from 'react'
import EditProductForm from './EditProductForm'

const Product = ({ title, price, quantity }) => {
  const [isEdit, setIsEdit] = useState(false)
  const toggleIsEdit = () => (isEdit ? setIsEdit(false) : setIsEdit(true))

  return (
    <div className="product">
      <div className="product-details">
        <a role="button" className="delete-button">
          <span>X</span>
        </a>
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className="quantity">{quantity} left in stock</p>
        {isEdit ? (
          <EditProductForm toggleIsEdit={toggleIsEdit} />
        ) : (
          <div className="actions product-actions">
            <a role="button" className="button add-to-cart">
              Add to Cart
            </a>
            <a role="button" className="button edit" onClick={toggleIsEdit}>
              Edit
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Product
