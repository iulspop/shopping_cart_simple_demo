const CartItem = ({ title, quantity, price }) => (
  <tr>
    <td>{title}</td>
    <td>{quantity}</td>
    <td>${price}</td>
  </tr>
)

export default CartItem
