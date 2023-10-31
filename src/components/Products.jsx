import "./Products.css"
import { products as initialState } from "../mocks/products.json"
import { AddToCartIcon } from "./Icons"
import { useFilters } from "../hooks/useFilters"

// Removed unused import statement

function Products() {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialState)
  return (
    <main className="products">
      <ul>
        {filteredProducts.slice(0, 10).map((product) => (
          <li key={product.id}>
            <img src={product.thumbnail} alt={product.name} />
            <div className="text">
              <h4>{product.title}</h4> <span>${product.price}</span>
            </div>
            <div>
              <button>
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
