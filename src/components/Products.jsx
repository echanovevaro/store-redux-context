import "./Products.css"
import { products as initialState } from "../mocks/products.json"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useFilters } from "../hooks/useFilters"
import { useContext } from "react"
import { CartContext } from "../context/cart"

// Removed unused import statement

function Products() {
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(initialState)
  const { addToCart, cart, removeItemFormCard } = useContext(CartContext)
  console.log(cart)

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id)
  }

  // const productInCart = checkProductInCart(filteredProducts)
  // console.log(productInCart)

  return (
    <main className="products">
      <ul>
        {filteredProducts.slice(0, 10).map((product) => {
          const productInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="text">
                <h4>{product.title}</h4> <span>${product.price}</span>
              </div>
              <div>
                <button
                  onClick={() => {
                    productInCart
                      ? removeItemFormCard(product)
                      : addToCart(product)
                  }}
                  style={{ backgroundColor: productInCart ? "#555" : "" }}
                >
                  {productInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
