import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalQuantity: 0,
  },
  reducers: {
    addProductToCart(state, action) {
      const newProduct = action.payload
      const existedProduct = state.cart.find(
        (product) => product.id === newProduct.id
      )
      if (!existedProduct) {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              id: newProduct.id,
              title: newProduct.title,
              price: newProduct.price,
              thumbnail: newProduct.thumbnail,
              quantity: 1,
            },
          ],
          totalQuantity: state.totalQuantity + 1,
        }
      } else {
        existedProduct.quantity += 1
        return state
      }
    },

    removeProductFromCart(state, action) {
      const productId = action.payload
      const existedProduct = state.cart.find(
        (product) => product.id === productId
      )
      if (existedProduct.quantity === 1) {
        return {
          ...state,
          cart: state.cart.filter((product) => product.id !== productId),
          totalQuantity: state.totalQuantity - 1,
        }
      } else {
        existedProduct.quantity -= 1
        return state
      }
    },
    clearCart(state) {
      return {
        ...state,
        cart: [],
        totalQuantity: 0,
      }
    },
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
