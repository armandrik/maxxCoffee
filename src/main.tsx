import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/themeContext.tsx";
import { ProductProvider } from "./context/productContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ProductProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ProductProvider>
);
