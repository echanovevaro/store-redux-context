import "./Products.css"
import { products as initialState } from "../mocks/products.json"
import { AddToCartIcon } from "./Icons"
import { useFilters } from "../hooks/useFilters"
import { useContext } from "react"
import { CartContext } from "../context/cart"

// Removed unused import statement

function Products() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialState)
  const { addToCart } = useContext(CartContext)

  return (
    <main className="products">
      <ul>
        {filteredProducts.slice(0, 10).map((prod) => (
          <li key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} />
            <div className="text">
              <h4>{prod.title}</h4> <span>${prod.price}</span>
            </div>
            <div>
              <button onClick={() => addToCart(prod)}>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products
