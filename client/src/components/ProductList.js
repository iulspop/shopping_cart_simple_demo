import { useEffect, useContext } from 'react'

import { ProductsContext, productsActions } from '../context/productsContext'
import Product from './Product'

const ProductList = () => {
  const { products, dispatch } = useContext(ProductsContext)

  useEffect(() => productsActions.productsReceived(dispatch), [dispatch])

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map(product => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
