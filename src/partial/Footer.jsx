import React from "react";
import { Link, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../assets/icons/footer-modern-art-gallery-logo.svg";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook-icon.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram-icon.svg";
import { ReactComponent as TwitterIcon } from "../assets/icons/twitter-icon.svg";

const Footer = (props) => {
  return (
    <footer
      className={
        props.addToClassName +
        " px-[32px] py-[48px]  md:py-[56px] md:pl-[39px] md:pr-[40px] xl:px-0 xl:py-[80px]" +
        " " +
        (props.secondary ? "bg-gold" : "bg-almost-black")
      }
    >
      <div className="max-w-[1110px] mx-auto md:flex">
        <Link to="/" className="h-[40px]" aria-label="Home">
          <Logo
            className={
              "h-[40px] w-[111px] xl:w-[160px] xl:h-[58px]" +
              " " +
              (props.secondary ? "text-almost-black" : "text-white")
            }
          />
        </Link>
        <p
          className={
            "mt-[38px] font-outfit [font-size:16px] [line-height:26px] max-w-[443px] md:max-w-none md:mt-0 md:[flex:0_0_36.6vw] md:ml-[8.5vw] xl:[font-size:18px] xl:[line-height:28px] xl:[flex:0_0_430px] xl:ml-[140px]" +
            " " +
            (props.secondary ? "text-almost-black" : "text-white")
          }
        >
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>

        <div className="mt-[38px] md:mt-0 md:flex md:[flex:1] md:justify-end">
          <div className="flex gap-[20px]">
            <a
              href="#"
              aria-label="Facebook"
              className={
                "h-[20px]  [transition:color_0.4s]" +
                " " +
                (props.secondary
                  ? "text-almost-black hover:text-white"
                  : "text-white hover:text-gold")
              }
            >
              <FacebookIcon className="fill-current" />
            </a>
            <a
              href="#"
              className={
                "h-[20px]  [transition:color_0.4s]" +
                " " +
                (props.secondary
                  ? "text-almost-black hover:text-white"
                  : "text-white hover:text-gold")
              }
              aria-label="Instagram"
            >
              <InstagramIcon className="fill-current" />
            </a>
            <a
              href="#"
              className={
                "h-[20px]  [transition:color_0.4s]" +
                " " +
                (props.secondary
                  ? "text-almost-black hover:text-white"
                  : "text-white hover:text-gold")
              }
              aria-label="Twitter"
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
