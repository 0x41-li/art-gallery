import React from "react";
import heroImage from "../../../assets/images/two-couples-observing-a-painting.jpg";
import RedirectingBtn from "../../../components/RedirectingBtn";

const Hero = () => {
  return (
    <section>
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="h-[64vw] bg-cover [background-position:1px_-42vw]"
      ></div>
      <div className="px-4">
        <div className="relative mt-8">
          <h1 className="text-almost-black font-bsd [font-size:60px] [font-weight:900] [line-height:55px] uppercase">
            MODERN <br />
            ART GALLERY
          </h1>
          <h1 className="hidden">MODERN ART GALLERY</h1>
        </div>
        <div className="mt-8">
          <p className="font-outfit text-lg text-dark-grey">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <RedirectingBtn primary/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
