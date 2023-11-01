import Products from "./components/Products"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import Cart from "./components/Cart"
import { CartProvider } from "./context/cart"

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Cart />
        <Products />
        {IS_DEVELOPMENT && <Footer />}
      </CartProvider>
    </>
  )
}

export default App
