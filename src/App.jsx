import Products from "./components/Products"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { IS_DEVELOPMENT } from "./config"
import { useFilters } from "./hooks/useFilters"

// const useFilters = () => {
//   const [filters, setFilters] = useState({
//     category: "all",
//     minPrice: 0,
//   })

//   const filterProducts = (products) => {
//     return products.filter((product) => {
//       return (
//         product.price >= filters.minPrice &&
//         (filters.category === "all" || product.category === filters.category)
//       )
//     })
//   }
//   return { filterProducts, setFilters }
// }

function App() {
  // const [products] = useState(initialState)

  // const filterProducts = (products) => {
  //   return products.filter((product) => {
  //     return (
  //       product.price >= filters.minPrice &&
  //       (filters.category === "all" || product.category === filters.category)
  //     )
  //   })
  // }

  return (
    <>
      <Header />
      <Products />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
