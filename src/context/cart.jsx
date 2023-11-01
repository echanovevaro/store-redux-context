import { useState, createContext } from "react"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  console.log(cart)

  const addToCart = (newProd) => {
    const existentItem = cart.find((item) => item.prod.id === newProd.id)
    console.log(existentItem)
    if (existentItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.prod.id === newProd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart((prev) => [...prev, { prod: newProd, quantity: 1 }])
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
