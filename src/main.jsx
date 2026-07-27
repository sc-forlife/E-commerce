import { StrictMode } from "react";
import { Provider } from "./src/components/ui/provider.jsx";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/E-commerce">
      <Provider>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
