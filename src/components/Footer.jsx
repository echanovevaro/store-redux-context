import { useFilters } from "../hooks/useFilters"
import "./Footer.css"

function Footer() {
  const { filters } = useFilters()
  return (
    <footer className="footer">
      {/* <h4>
        Prueba técnica de React ⚛️ － <span>context-redux</span>
      </h4> */}
      <p>{JSON.stringify(filters, null, 2)}</p>
    </footer>
  )
}

export default Footer
