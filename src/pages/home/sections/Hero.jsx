import React from "react";
import heroImage from "../../../assets/images/home/hero/two-couples-observing-a-painting.jpg";
import RedirectingBtn from "../../../components/RedirectingBtn";

const Hero = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto">
      <div
        style={{ backgroundImage: `url(${heroImage})` }}
        className="h-[64vw] bg-cover bg-no-repeat [background-position:1px_-42vw] md:h-[700px] md:w-[57vw] md:[background-position:-18px_0px] lg:[background-position:-18px_-16vw] xl:bg-almost-black xl:[background-position:top_0px_right_0px] xl:[background-size:540px_800px] xl:w-[990px] xl:h-[800px]"
      ></div>
      <div className="px-4 max-w-[475px] md:px-0 md:max-w-[339px] md:absolute md:top-[145px] md:left-[51vw] xl:w-[1110px] xl:max-w-none xl:left-[165px] xl:flex xl:top-[190px]">
        <div className="relative mt-8 md:mt-0 xl:w-[514px]">
          <div className="relative z-10 xl:w-[285px] xl:overflow-hidden">
            <h1 className="text-almost-black font-bsd [font-size:60px] [font-weight:900] [line-height:55px] uppercase md:[font-size:70px] md:[line-height:65px] xl:[font-size:96px] xl:[line-height:88px] xl:w-[514px] xl:text-white">
              MODERN <br />
              ART GALLERY
            </h1>
          </div>

          <h1 className="hidden z-0 text-almost-black absolute font-bsd [font-size:96px] [line-height:88px] [font-weight:900] top-0 left-0 xl:block">
            MODERN <br />
            ART GALLERY
          </h1>
        </div>
        <div className="mt-8 md:mt-12 xl:max-w-[350px] xl:ml-[226px] 2xl:ml-[246px] xl:mt-0">
          <p className="font-outfit text-lg text-dark-grey xl:[font-size:22px] xl:[line-height:32px]">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <RedirectingBtn
            
            AddToClassName="mt-8 md:mt-12 xl:mt-[64px]"
            to="/location"
            text="OUR LOCATION"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
