import React from "react";
import AccordionComp from "./accordion";
import Logo from "./Logo";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
//content array

const contents = [
  { title: "Location", content: ["America", "asia", "Europe", "Afica"] },
  { title: "Contact", content: ["About Me", "Teams", "profiles", "FAQ"] },
  { title: "Legals", content: ["Privacy", "Disclaimer", "Terms", "Company"] },
];

function Footer() {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      <div className="flex flex-col sm:hidden py-3 gap-2">
        {contents.map(({ title, content }, index) => {
          return (
            <AccordionComp
              key={index}
              content={content}
              title={title}
            ></AccordionComp>
          );
        })}
      </div>
      <div className="logo flex flex-col gap-2 py-3 px-3 sm:px-5">
        <Logo logo={{ bg: "black", text: "white" }} text={"black"} />
        <div className="mt-3 leading-[36px] text-[18px] font-thin">
          2021 Award winning Finance Advisor and Lorem ipsum dolor sit amet
        </div>
        <div className="flex gap-5 mt-4">
          <div className="w-[45px]  text-[20px] h-[45px] text-light bg-orange rounded-full flex items-center justify-center">
            <ImFacebook />
          </div>
          <div className="w-[45px] text-[20px] text-light h-[45px] bg-orange rounded-full flex items-center justify-center">
            <ImTwitter />
          </div>
          <div className="w-[45px] text-[20px] text-light h-[45px] bg-orange rounded-full flex items-center justify-center">
            <ImInstagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
