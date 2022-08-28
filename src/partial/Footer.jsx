import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/icons/footer-modern-art-gallery-logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter-icon.svg";

const Footer = (props) => {
  return (
    <footer
      className={
        props.addToClassName +
        " px-[32px] py-[48px] bg-almost-black md:py-[56px] md:pl-[39px] md:pr-[40px] md:flex"
      }
    >
      <Link to="/" className="h-[40px]">
        <Logo />
      </Link>
      <p className="mt-[38px] text-white font-outfit [font-size:16px] [line-height:26px] max-w-[443px] md:max-w-none md:mt-0 md:[flex:0_0_36.6vw] md:ml-[8.5vw]">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>

      <div className="mt-[38px] md:mt-0 md:flex md:[flex:1] md:justify-end">
        <div className="flex gap-[20px]">
          <a href="#">
            <FacebookIcon className="[&>path]:[fill:white]" />
          </a>
          <a href="#">
            <InstagramIcon className="[&>path]:[fill:white]" />
          </a>
          <a href="#" className="mt-[2px]">
            <TwitterIcon className="[&>path]:[fill:white]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
