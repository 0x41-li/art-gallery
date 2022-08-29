import React from "react";
import Footer from "../../partial/Footer";
import Gallery from "./sections/Gallery";
import Hero from "./sections/Hero";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <Gallery />
      </main>
      <Footer addToClassName="mt-[120px] xl:mt-[180px]" />
    </>
  );
};

export default Home;
