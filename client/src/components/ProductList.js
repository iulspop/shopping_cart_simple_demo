import Product from './Product'

const ProductList = ({ productList, onDeleteProduct, onAddToCart }) => (
  <div className="product-listing">
    <h2>Products</h2>
    {productList.map(product => (
      <Product
        key={product._id}
        {...product}
        onDeleteProduct={onDeleteProduct}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
)

export default ProductList
