import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./partial/Footer";

// css
import "./index.css";

const App = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
