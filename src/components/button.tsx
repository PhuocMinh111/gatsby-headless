import React, { ReactElement, ReactNode } from "react";

interface IProp {
  bg?: string;
  textColor?: string;
  content?: string;
  logo?: ReactNode;
  style?: string;
}

function Button({ bg = "#383F50", textColor, content, logo, style }: IProp) {
  return (
    <div
      style={{ color: textColor, backgroundColor: bg }}
      className={` hover:underline bg-black text-gray-200 ${style} `}
    >
      {content}
      {logo}
    </div>
  );
}

export default Button;
