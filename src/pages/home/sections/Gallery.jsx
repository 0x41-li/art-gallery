import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

// images
import greyRoomWithPaintings343w from "../../../assets/images/home/gallery/grey-room-with-paintings-343w.jpg";
import greyRoomWithPaintings398w from "../../../assets/images/home/gallery/grey-room-with-paintings-398w.jpg";
import greyRoomWithPaintings635w from "../../../assets/images/home/gallery/grey-room-with-paintings-635w.jpg";

import greyRoomWithATableAndAPainting343w from "../../../assets/images/home/gallery/grey-room-with-a-table-and-a-painting-343w.jpg";
import greyRoomWithATableAndAPainting398w from "../../../assets/images/home/gallery/grey-room-with-a-table-and-a-painting-398w.jpg";
import greyRoomWithATableAndAPainting635w from "../../../assets/images/home/gallery/grey-room-with-a-table-and-a-painting-635w.jpg";

import brownRoomWithPeopleLookingAtPaintings343w from "../../../assets/images/home/gallery/brown-room-with-people-looking-at-paintings-343w.jpg";
import brownRoomWithPeopleLookingAtPaintings398w from "../../../assets/images/home/gallery/brown-room-with-people-looking-at-paintings-398w.jpg";
import brownRoomWithPeopleLookingAtPaintings445w from "../../../assets/images/home/gallery/brown-room-with-people-looking-at-paintings-445w.jpg";

const Gallery = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return (
    <section className="px-4 mt-[120px] max-w-[375px] mx-auto md:grid md:max-w-[768px] md:grid-cols-[223px_46px_107px_280px] md:grid-rows-[400px_313px_396px] md:pl-[39px] md:pr-[40px] md:gap-[11px] xl:max-w-[1110px] xl:px-0 xl:grid-cols-[350px_65px_160px_445px] xl:grid-rows-[400px_313px_377px] xl:gap-[30px] xl:mt-[180px]">
      <div
        style={{
          backgroundImage: `url(${
            isDesktop
              ? greyRoomWithPaintings635w
              : isTablet
              ? greyRoomWithPaintings398w
              : greyRoomWithPaintings343w
          })`,
        }}
        className="h-[320px] w-[343px] bg-cover bg-no-repeat md:col-start-3 md:col-end-5 md:w-full md:h-full"
      ></div>
      <div className="mt-[25px] md:col-start-1 md:row-start-1 md:mt-[36px] xl:mt-[60px]">
        <h2 className="font-bsd [font-size:50px] [font-weight:900] [line-height:45px] uppercase xl:[font-size:60px] xl:[line-height:60px]">
          Your Day
          <br className="xl:hidden" /> at the Gallery
        </h2>
        <p className="mt-[21px] font-outfit [font-size:18px] [line-height:28px] [font-weight:300] text-dark-grey md:mt-[24px] xl:[font-size:22px] xl:[line-height:32px] xl:mt-[32px]">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${
            isDesktop
              ? greyRoomWithATableAndAPainting635w
              : isTablet
              ? greyRoomWithATableAndAPainting398w
              : greyRoomWithATableAndAPainting343w
          })`,
        }}
        className="h-[480px] w-[343px] bg-contain mt-[32px] bg-no-repeat md:col-start-1 md:col-end-4 md:w-full md:h-full md:mt-0 md:row-start-2 md:row-end-4"
      ></div>
      <div
        style={{
          backgroundImage: `url(${
            isDesktop
              ? brownRoomWithPeopleLookingAtPaintings445w
              : isTablet
              ? brownRoomWithPeopleLookingAtPaintings398w
              : brownRoomWithPeopleLookingAtPaintings343w
          })`,
        }}
        className="h-[200px] w-[343px] bg-cover bg-no-repeat mt-[16px] md:mt-0 md:h-full md:w-full md:row-start-2 md:row-end-3 md:col-start-4 md:col-end-5"
      ></div>
      <div className="px-[24px] pt-[48px] pb-[47px] bg-almost-black mt-[16px] md:mt-0 md:pt-[85px] md:pl-[29px] md:pr-[28px] xl:pt-[65px] xl:pb-[64px] xl:pl-[48px] xl:pr-[47px]">
        <h2 className="font-bsd text-white [font-size:50px] [line-height:45px] [font-weight:900] xl:[font-size:60px] xl:[line-height:60px]">
          COME & BE <br /> INSPIRED
        </h2>
        <p className="mt-[24px] font-outfit text-white [font-size:18px] [line-height:28px] [font-weight:300] xl:[font-size:22px] xl:[line-height:32px] xl:mt-[32px]">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
