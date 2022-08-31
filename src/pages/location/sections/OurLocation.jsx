import React from "react";

const OurLocation = () => {
  return (
    <section className="bg-almost-black">
      <div className="px-[16px] pt-[48px] pb-[56px] md:pl-[39px] md:pr-[40px] md:pt-[88px] pb-[80px] md:flex md:justify-between md:max-w-[900px] md:mx-auto lg:max-w-[1110px] xl:px-0 lg:pt-[104px] lg:pb-[128px]">
        <div className="[flex:0_0_223px]">
          <h2 className="font-bsd [font-size:50px] [line-height:45px] [font-weight:900] text-white uppercase  md:[font-size:55px] md:[line-height:50px] lg:[font-size:70px] lg:[line-height:70px] lg:max-w-[350px]">
            OUR LOCATION
          </h2>
        </div>
        <div className="mt-[48px] md:mt-0 lg:[flex:0_0_540px]">
          <h3 className="font-bsd [font-size:32px] [line-height:32px] [font-weight:900] text-gold uppercase lg:[font-size:36px] lg:[line-height:36px]">
            99 King Street
          </h3>
          <address className="mt-[20px] text-white font-outfit [font-size:18px] [line-height:28px] [font-weight:300] lg:[font-size:22px] lg:[line-height:32px] lg:mt-[24px]">
            Newport <br />
            RI 02840 <br />
            United States of America
          </address>
          <p className="mt-[20px] text-white font-outfit [font-size:18px] [line-height:28px] [font-weight:300] max-w-[398px] lg:[font-size:22px] lg:[line-height:32px] lg:mt-[32px] lg:max-w-full">
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
