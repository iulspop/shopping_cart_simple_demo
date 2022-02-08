import Product from './Product'

const ProductList = ({ productList, onDeleteProduct }) => (
  <div className="product-listing">
    <h2>Products</h2>
    {productList.map(product => (
      <Product key={product._id} {...product} onDeleteProduct={onDeleteProduct} />
    ))}
  </div>
)

export default ProductList
