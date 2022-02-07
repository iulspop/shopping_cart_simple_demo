import CartItem from './CartItem'

const Cart = () => (
    <div class="cart">
      <h2>Your Cart</h2>
      <CartItem />
      <p>Total: $0</p>
      <a class="button checkout disabled">Checkout</a>
    </div>
)

export default Cart