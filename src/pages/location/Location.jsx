import React from "react";
import Footer from "../../partial/Footer";
import LocationOnAMap from "./sections/LocationOnAMap";
import OurLocation from "./sections/OurLocation";

const Location = () => {
  return (
    <>
      <main>
        <LocationOnAMap />
        <OurLocation />
      </main>
      <Footer secondary />
    </>
  );
};

export default Location;
