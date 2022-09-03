import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
