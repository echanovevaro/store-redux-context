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
      state.totalQuantity += 1

      if (!existedProduct) {
        state.cart.push({
          title: newProduct.title,
          price: newProduct.price,
          thumbnail: newProduct.thumbnail,
          quantity: 1,
        })
      } else {
        existedProduct.quantity++
      }
    },
  },

  removeProductFromCart(state, action) {
    const id = action.payload
    const existingItem = state.items.find((item) => item.id === id)

    state.totalQuantity--
    if (existingItem.quantity === 1) {
      state.items = state.items.filter((item) => item.id !== id)
    } else {
      existingItem.quantity--
    }
  },
})

export const cartActions = cartSlice.actions

export default cartSlice
