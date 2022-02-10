import Product from './Product'

const ProductList = ({ productList, onAddToCart }) => (
  <div className="product-listing">
    <h2>Products</h2>
    {productList.map(product => (
      <Product
        key={product._id}
        {...product}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
)

export default ProductList
