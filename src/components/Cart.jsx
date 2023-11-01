import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useId } from "react"
import { CartContext } from "../context/cart"
import { useContext } from "react"
function Cart() {
  const cartCheckBoxId = useId()
  const { clearCart, addToCart, cart } = useContext(CartContext)

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className="cart">
        <ul>
          {cart.map((item) => (
            <li key={item.prod.id}>
              <img src={item.prod.thumbnail} alt={item.prod.title} />

              <div>
                <strong>{item.prod.title}</strong> -{" "}
                <small>$ {item.prod.price}</small>
              </div>
              <footer>
                <small>Qty: {item.quantity}</small>
                <button onClick={() => addToCart(item.prod)}>+</button>
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
