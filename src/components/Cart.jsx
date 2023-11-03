import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useId } from "react"
// import { useCart } from "../hooks/useCart"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../store/cart-slice"
function Cart() {
  const cartCheckBoxId = useId()
  const dispatch = useDispatch()

  const { cart } = useSelector((state) => state.cart)
  const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0)
  const totalPrice = cart.reduce((acc, item) => acc + item.price * totalQty, 0)

  return (
    <>
      <label htmlFor={cartCheckBoxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className="cart">
        <div className="texts">
          <strong>Total Qty : {totalQty}</strong>

          <strong>Total Price : {totalPrice}</strong>
        </div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.thumbnail} alt={item.title} />

              <div>
                <strong>{item.title}</strong>
              </div>

              <div>
                <small>$ {item.price}</small>
              </div>
              <footer>
                <small>Qty: {item.quantity}</small>
                <button
                  onClick={() => dispatch(cartActions.addProductToCart(item))}
                >
                  {" "}
                  +{" "}
                </button>
              </footer>
            </li>
          ))}
        </ul>
        {/* <button onClick={clearCart} className="btn-clear">
          <ClearCartIcon />
        </button> */}
      </aside>
    </>
  )
}

export default Cart
