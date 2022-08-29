import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Location from "./pages/location/Location";

// css
import "./index.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </>
  );
};

export default App;
