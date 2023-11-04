import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./cart-slice"

const localStorageMiddleware = (obj) => (next) => (action) => {
  console.log(obj)
  const result = next(action)
  localStorage.setItem("cart", JSON.stringify(obj.getState().cart))
  return result
}

const initialState = {
  cart: [],
  totalQuantity: 0,
}

const savedCart = JSON.parse(
  localStorage.getItem("cart") || JSON.stringify(initialState)
)

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
  preloadedState: {
    cart: savedCart,
  },
  middleware: [localStorageMiddleware],
})
export default store
