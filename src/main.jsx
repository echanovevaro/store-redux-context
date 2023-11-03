import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { FiltersProvider } from "./context/filters.jsx"
import store from "./store/index.js"
import { Provider } from "react-redux"
ReactDOM.createRoot(document.getElementById("root")).render(
  <FiltersProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </FiltersProvider>
)
