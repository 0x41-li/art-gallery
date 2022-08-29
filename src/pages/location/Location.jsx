import React from "react";
import Footer from "../../partial/Footer";
import LocationOnAMap from "./sections/LocationOnAMap";

const Location = () => {
  return (
    <>
      <main>
        <LocationOnAMap />
      </main>
      <Footer secondary/>
    </>
  );
};

export default Location;
