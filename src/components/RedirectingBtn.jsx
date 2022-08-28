import React from "react";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const RedirectingBtn = (props) => {
  return (
    <Link
      to="/location"
      className={
        (props.primary
          ? "[&>div:nth-child(1)]:hover:bg-gold [&>div:nth-child(2)]:hover:bg-almost-black"
          : "[&>div:nth-child(1)]:hover:bg-almost-black [&>div:nth-child(2)]:hover:bg-gold") +
        " flex h-[72px] [&>div]:[transition:background_0.6s] " + props.AddToClassName
      }
    >
      <div
        className={
          (props.primary ? "bg-almost-black" : "bg-gold") +
          " w-[204px] h-full flex items-center justify-center"
        }
      >
        <p className="text-white font-bsd [font-weight:900] [letter-spacing:3.63px] uppercase text-xl">
          OUR LOCATION
        </p>
      </div>
      <div
        className={
          (props.primary ? "bg-gold" : "bg-almost-black") +
          " w-[56px] h-full flex items-center justify-center"
        }
      >
        <ArrowIcon />
      </div>
    </Link>
  );
};

export default RedirectingBtn;
