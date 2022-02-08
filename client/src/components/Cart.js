import CartItem from './CartItem'

const Cart = ({ items }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {items.length > 0 ? (
      <table class="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <tr>
            <td colspan="3" class="total">
              Total: ${items.reduce((sum, item) => sum + item.quantity * item.price, 0)}
            </td>
          </tr>
        </tbody>
      </table>
    ) : (
      <p>Your cart is empty</p>
    )}
    <a href="/#" className="button checkout disabled">
      Checkout
    </a>
  </div>
)

export default Cart
