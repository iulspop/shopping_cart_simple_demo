import { useState, useContext } from 'react'

import { ProductsContext, productsActions } from '../context/productsContext'
import { CartItemsContext, cartItemsActions } from '../context/cartItemsContext'

import EditProductForm from './EditProductForm'

const Product = ({ _id, title, price, quantity }) => {
  const { dispatch: productsDispatch } = useContext(ProductsContext)
  const { dispatch: cartDispatch } = useContext(CartItemsContext)

  const [isEdit, setIsEdit] = useState(false)

  const handleDeleteProduct = productID => productsActions.productDeleted(productsDispatch, productID)

  const handleAddToCart = id => cartItemsActions.cartItemAdded(cartDispatch, productsDispatch, id)

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
