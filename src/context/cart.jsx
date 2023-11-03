import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useLocalStorage("cart", [])

  const addToCart = (newProd) => {
    const existentItem = cart?.find((item) => item.id === newProd.id)

    if (existentItem) {
      setCart((prev) =>
        prev.map((item) =>
          item.id === newProd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      //if the product is not in the cart, add it
      setCart((prev) => [...prev, { ...newProd, quantity: 1 }])
    }
  }

  const clearCart = () => {
    setCart([])
  }
  const removeItemFormCard = (product) => {
    setCart((prev) => prev.filter((item) => item.id !== product.id))
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, clearCart, removeItemFormCard }}
    >
      {children}
    </CartContext.Provider>
  )
}
