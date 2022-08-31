import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// css
import "./index.css";

const Location = React.lazy(() => import("./pages/location/Location"));
const Home = React.lazy(() => import("./pages/home/Home"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
