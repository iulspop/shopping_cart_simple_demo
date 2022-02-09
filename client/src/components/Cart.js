import CartItem from './CartItem'

const Cart = ({ items, onCheckoutCart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {items.length > 0 ? (
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <CartItem key={item._id} {...item} />
          ))}
          <tr>
            <td colSpan="3" className="total">
              Total: ${items.reduce((sum, item) => sum + item.quantity * item.price, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <p>Your cart is empty</p>
    )}
    {items.length > 0 ? (
      <button className="button checkout" onClick={onCheckoutCart}>
        Checkout
      </button>
    ) : (
      <button className="button checkout disabled" disabled>
        Checkout
      </button>
    )}
  </div>
)

export default Cart
