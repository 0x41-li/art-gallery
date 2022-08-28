import React from "react";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

// images
import greyRoomWithPaintings from "../../../assets/images/home/gallery/grey-room-with-paintings-343w.jpg";
import greyRoomWithATableAndAPainting343w from "../../../assets/images/home/gallery/grey-room-with-a-table-and-a-painting-343w.jpg";
import brownRoomWithPeopleLookingAtPaintings from "../../../assets/images/home/gallery/brown-room-with-people-looking-at-paintings-343w.jpg";

const Gallery = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <section className="px-4 mt-[120px]">
      <div
        style={{ backgroundImage: `url(${greyRoomWithPaintings})` }}
        className="h-[320px] w-[343px] bg-cover bg-no-repeat"
      ></div>
      <div className="mt-[25px]">
        <h2 className="font-bsd [font-size:50px] [font-weight:900] [line-height:45px] uppercase">
          Your Day
          <br /> at the Gallery
        </h2>
        <p className="mt-[21px] font-outfit [font-size:18px] [line-height:28px] [font-weight:300] text-dark-grey">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${greyRoomWithATableAndAPainting343w})`,
        }}
        className="h-[480px] w-[343px] bg-contain mt-[32px] bg-no-repeat"
      ></div>
      <div
        style={{
          backgroundImage: `url(${brownRoomWithPeopleLookingAtPaintings})`,
        }}
        className="h-[200px] w-[343px] bg-cover bg-no-repeat mt-[16px]"
      ></div>
      <div className="px-[24px] pt-[48px] pb-[47px] bg-almost-black mt-[16px]">
        <h2 className="font-bsd text-white [font-size:50px] [line-height:45px] [font-weight:900]">
          COME & BE <br /> INSPIRED
        </h2>
        <p className="mt-[24px] font-outfit text-white [font-size:18px] [line-height:28px] [font-weight:300]">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
