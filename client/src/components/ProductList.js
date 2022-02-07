import Product from './Product'

const ProductList = ({ productList }) => (
  <div className="product-listing">
    <h2>Products</h2>
    {productList.map(product => (
      <Product key={product.id} {...product} />
    ))}
  </div>
)

export default ProductList
