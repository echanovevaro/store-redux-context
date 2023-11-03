import Products from "./components/Products"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import Cart from "./components/Cart"

function App() {
  return (
    <>
      <Header />
      <Cart />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
