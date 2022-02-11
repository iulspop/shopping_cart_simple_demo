import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { productDeleted } from '../redux/actions/productAction'
import { cartItemAdded } from '../redux/actions/cartItemsAction'

import EditProductForm from './EditProductForm'

const Product = ({ _id, title, price, quantity }) => {
  const dispatch = useDispatch()

  const [isEdit, setIsEdit] = useState(false)

  const handleDeleteProduct = async productID => {
    dispatch(productDeleted(productID))
  }

  const handleAddToCart = id => dispatch(cartItemAdded(id))

  return (
    <div className="product">
      <div className="product-details">
        <button className="delete-button" onClick={() => handleDeleteProduct(_id)}>
          <span>X</span>
        </button>
        <h3>{title}</h3>
        <p className="price">${price}</p>
        <p className={quantity > 0 ? 'quantity' : 'quantity none-left'}>{quantity} left in stock</p>
        {isEdit ? (
          <EditProductForm
            onCancelEdit={() => setIsEdit(false)}
            id={_id}
            title={title}
            price={price}
            quantity={quantity}
          />
        ) : (
          <div className="actions product-actions">
            {quantity > 0 ? (
              <button className="button add-to-cart" onClick={() => handleAddToCart(_id)}>
                Add to Cart
              </button>
            ) : (
              <button className="button add-to-cart disabled" disabled>
                Add to Cart
              </button>
            )}
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
