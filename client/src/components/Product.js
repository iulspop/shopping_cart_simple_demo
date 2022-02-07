import EditProductForm from './EditProductForm'

const Product = () => (
  <div class="product">
    <div class="product-details">
      <a class="delete-button">
        <span>X</span>
      </a>
      <h3>Amazon Kindle E-reader</h3>
      <p class="price">$79.99</p>
      <p class="quantity">5 left in stock</p>
      <div class="actions product-actions">
        <a class="button add-to-cart">Add to Cart</a>
        <a class="button edit">Edit</a>
      </div>
      <EditProductForm />
    </div>
  </div>
)

export default Product
