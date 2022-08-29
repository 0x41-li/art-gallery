import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/icons/footer-modern-art-gallery-logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter-icon.svg";

const Footer = (props) => {
  const location = useLocation();
  return (
    <footer
      className={
        props.addToClassName +
        " px-[32px] py-[48px] bg-almost-black md:py-[56px] md:pl-[39px] md:pr-[40px] xl:px-0 xl:py-[80px]"
      }
    >
      <div className="max-w-[1110px] mx-auto md:flex">
        <Link to="/" className="h-[40px]">
          <Logo className="h-[40px] w-[111px] xl:w-[160px] xl:h-[58px] text-white" />
        </Link>
        <p className="mt-[38px] text-white font-outfit [font-size:16px] [line-height:26px] max-w-[443px] md:max-w-none md:mt-0 md:[flex:0_0_36.6vw] md:ml-[8.5vw] xl:[font-size:18px] xl:[line-height:28px] xl:[flex:0_0_430px] xl:ml-[140px]">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>

        <div className="mt-[38px] md:mt-0 md:flex md:[flex:1] md:justify-end">
          <div className="flex gap-[20px]">
            <a
              href="#"
              className="group h-[20px] text-white hover:text-gold [transition:color_0.4s]"
            >
              <FacebookIcon className="fill-current" />
            </a>
            <a
              href="#"
              className="group h-[20px] text-white hover:text-gold [transition:color_0.4s]"
            >
              <InstagramIcon className="fill-current" />
            </a>
            <a
              href="#"
              className="group h-[20px] text-white hover:text-gold [transition:color_0.4s]"
            >
              <TwitterIcon className="fill-current" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
