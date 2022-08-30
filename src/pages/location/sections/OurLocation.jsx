import React from "react";

const OurLocation = () => {
  return (
    <section className="">
      <div className="bg-almost-black px-[16px] pt-[48px] pb-[56px]">
        <div className="">
          <h2 className="font-bsd [font-size:50px] [line-height:45px] [font-weight:900] text-white uppercase">
            OUR LOCATION
          </h2>
        </div>
        <div className="">
          <h3 className="font-bsd [font-size:32px] [line-height:32px] [font-weight:900] text-gold uppercase mt-[48px]">
            99 King Street
          </h3>
          <address className="mt-[20px] text-white font-outfit [font-size:18px] [line-height:28px] [font-weight:300]">
            Newport <br />
            RI 02840 <br />
            United States of America
          </address>
          <p className="mt-[20px] text-white font-outfit [font-size:18px] [line-height:28px] [font-weight:300]">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
