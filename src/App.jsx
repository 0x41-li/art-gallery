import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

import WebFont from "webfontloader";

// css
import "./index.css";

const Location = React.lazy(() => import("./pages/location/Location"));
const Home = React.lazy(() => import("./pages/home/Home"));

const App = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Big Shoulders Display:900",
          "Outfit:300&display=swap",
        ],
      },
    });
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
