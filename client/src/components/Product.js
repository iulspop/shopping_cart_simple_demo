import EditProductForm from './EditProductForm'

const Product = ({ title, price, quantity }) => (
  <div className="product">
    <div className="product-details">
      <a role="button" className="delete-button">
        <span>X</span>
      </a>
      <h3>{title}</h3>
      <p className="price">${price}</p>
      <p className="quantity">{quantity} left in stock</p>
      <div className="actions product-actions">
        <a role="button" className="button add-to-cart">
          Add to Cart
        </a>
        <a role="button" className="button edit">
          Edit
        </a>
      </div>
      <EditProductForm />
    </div>
  </div>
)

export default Product
