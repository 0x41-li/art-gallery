import React from "react";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";

const RedirectingBtn = (props) => {
  return (
    <Link
      to={props.to}
      className={
        "[&>div:nth-child(1)]:hover:bg-gold [&>div:nth-child(2)]:hover:bg-almost-black flex h-[72px] [&>div]:[transition:background_0.6s]" +
        " " +
        props.AddToClassName
      }
    >
      <div
        className={
          (props.switch && "order-2") +
          " " +
          "bg-almost-black w-[204px] h-full flex items-center justify-center"
        }
      >
        <p className="text-white font-bsd [font-weight:900] [letter-spacing:3.63px] uppercase text-xl">
          {props.text}
        </p>
      </div>
      <div className="bg-gold w-[56px] h-full flex items-center justify-center">
        <ArrowIcon className={props.oppositeArrow && "rotate-180"} />
      </div>
    </Link>
  );
};

export default RedirectingBtn;
