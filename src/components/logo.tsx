import React from "react";
import { BiGame } from "react-icons/bi";
import { theme } from "../theme/theme";

function Logo({
  logo,
  text = "light"
}: {
  logo?: { bg: string; text: string };
  text?: string;
}) {
  return (
    <div className="logo flex items-center font-[700] gap-2">
      <div
        style={
          logo ? { backgroundColor: logo.bg, color: logo.text } : undefined
        }
        className={`w-[53px] inline-flex font-[700] text-[32px] items-center justify-center h-[53px]  rounded-full bg-orange text-light`}
      >
        K
      </div>
      <div className="inline max-w-[50px]">
        Kinka <br /> Finance
      </div>
    </div>
  );
}

export default Logo;
