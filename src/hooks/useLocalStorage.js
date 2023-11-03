import { useEffect } from "react"
import { useState } from "react"

export const useLocalStorage = (key, initialState) => {
  const localStorageInitialItem = JSON.parse(localStorage.getItem(key))
  console.log(localStorageInitialItem)

  const [value, setValue] = useState(localStorageInitialItem || initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
    console.log("entrando en el useEffect", value)
  }, [key, value])

  return [value, setValue]
}
