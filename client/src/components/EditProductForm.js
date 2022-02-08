const EditProductForm = ({ cancelEdit, title, price, quantity }) => (
  <div className="edit-form">
    <h3>Edit Product</h3>
    <form>
      <div className="input-group">
        <label htmlFor="product-name">Product Name</label>
        <input type="text" id="product-name" value={title} />
      </div>

      <div className="input-group">
        <label htmlFor="product-price">Price</label>
        <input type="text" id="product-price" value={price} />
      </div>

      <div className="input-group">
        <label htmlFor="product-quantity">Quantity</label>
        <input type="text" id="product-quantity" value={quantity} />
      </div>

      <div className="actions form-actions">
        <button className="button">Update</button>
        <button className="button" onClick={cancelEdit}>
          Cancel
        </button>
      </div>
    </form>
  </div>
)

export default EditProductForm
