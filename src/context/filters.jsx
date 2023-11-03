import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

const initialState = {
  category: "all",
  minPrice: 0,
}

//FilterContext El que tenemos que consumir y exportar , importándolo en el componente que lo necesite

export const FilterContext = createContext()

//El que  nos provee de acceso al contexto y a los datos
//El que nos permite modificar los datos del contexto

export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useLocalStorage("filters", initialState)

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
