import { StrictMode } from "react";
import { Provider } from "./src/components/ui/provider.jsx";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/E-commerce">
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>,
);
