import React from "react";
import heroImage from "../../../assets/images/home/hero/two-couples-observing-a-painting.jpg";
import RedirectingBtn from "../../../components/RedirectingBtn";

const Hero = () => {
  return (
    <section className="relative max-w-[1440px] mx-auto">
      <div className="relative overflow-hidden h-[64vw] md:h-[700px] md:w-[56.9vw] xl:bg-almost-black xl:w-[990px] xl:h-[800px]">
        <img
          src={heroImage}
          alt="Two people looking on a painting"
          className="max-w-full absolute top-[-160px] right-0 md:h-[91.1vw] md:top-[0px] md:w-f[56vw] lg:top-[-16vw] xl:w-[540px] xl:h-[800px] xl:top-0"
        />
      </div>
      <div className="px-4 max-w-[475px] md:px-0 md:max-w-[339px] md:absolute md:top-[145px] md:left-[50.6vw] xl:w-[1110px] xl:max-w-none xl:left-[165px] xl:flex xl:top-[190px]">
        <div className="relative mt-8 md:mt-0 xl:w-[514px]">
          <h1 className="text-almost-black font-bsd [font-size:60px] [font-weight:900] [line-height:55px] uppercase md:[font-size:70px] md:[line-height:65px] xl:[font-size:96px] xl:[line-height:88px] xl:w-[514px] xl:text-white [mix-blend-mode:difference]">
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
            addToClassName="mt-8 md:mt-12 xl:mt-[64px] w-[260px]"
            to="/location"
            text="OUR LOCATION"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
