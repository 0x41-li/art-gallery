import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="location" element={<Location />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
