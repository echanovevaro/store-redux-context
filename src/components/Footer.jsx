import "./Footer.css"
import { useFilters } from "../hooks/useFilters.js"
// import { useCart } from "../hooks/useCart.js"

function Footer() {
  // const { cart } = useCart()
  const { filters } = useFilters()
  return (
    <footer className="footer">
      <h6>{JSON.stringify(filters, null, 2)}</h6>
      {/* <h6>{JSON.stringify(cart, null, 2)}</h6> */}
    </footer>
  )
}

export default Footer
