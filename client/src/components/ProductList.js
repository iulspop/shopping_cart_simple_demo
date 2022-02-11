import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { productsReceived } from '../redux/actions/productAction'

import Product from './Product'

const ProductList = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.products)

  useEffect(
    () => void axios.get('/api/products').then(response => dispatch(productsReceived(response.data))),
    [dispatch]
  )

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {productList.map(product => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  )
}

export default ProductList
