import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"
function Filters() {
  const { setFilters, filters } = useFilters()
  const minPriceFilteredId = useId()
  const categoryFilteredId = useId()
  const handleRangeChange = (event) => {
    setFilters((prev) => ({ ...prev, minPrice: event.target.value }))
  }
  const handleSelectChange = (event) => {
    setFilters((prev) => ({ ...prev, category: event.target.value }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor="price" id={minPriceFilteredId}>
          Filter by minimum price:
        </label>
        <input
          type="range"
          min="0"
          max="2000"
          id={minPriceFilteredId}
          onChange={handleRangeChange}
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor="category" id={categoryFilteredId}>
          Filter by category:
        </label>
        <select
          type="select"
          id={categoryFilteredId}
          onChange={handleSelectChange}
          value={filters.category}
        >
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>
    </section>
  )
}

export default Filters
