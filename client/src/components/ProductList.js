import Product from './Product'

const ProductList = ({ productList, onDeleteProduct, onEditProduct, onAddToCart }) => (
  <div className="product-listing">
    <h2>Products</h2>
    {productList.map(product => (
      <Product
        key={product._id}
        {...product}
        onDeleteProduct={onDeleteProduct}
        onEditProduct={onEditProduct}
        onAddToCart={onAddToCart}
      />
    ))}
  </div>
)

export default ProductList
