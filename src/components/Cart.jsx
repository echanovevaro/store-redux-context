import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useId } from "react"
import { useCart } from "../hooks/useCart"

function Cart() {
  const cartCheckBoxId = useId()

  const { addToCart, cart, clearCart } = useCart()

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div>
                <strong>{item.title}</strong> - <small>$ {item.price}</small>
              </div>
              <footer>
                <small>Qty: {item.quantity}</small>
                <button onClick={() => addToCart(item)}> + </button>
              </footer>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
