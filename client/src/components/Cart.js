import CartItem from './CartItem'

const Cart = () => (
  <div className="cart">
    <h2>Your Cart</h2>
    <CartItem />
    <p>Total: $0</p>
    <a role="button" className="button checkout disabled">
      Checkout
    </a>
  </div>
)

export default Cart
