import Product from './Product'

const ProductList = ({ productList, onDeleteProduct, onEditProduct }) => (
  <div className="product-listing">
    <h2>Products</h2>
    {productList.map(product => (
      <Product key={product._id} {...product} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct} />
    ))}
  </div>
)

export default ProductList
