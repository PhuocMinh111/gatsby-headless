import React, { ReactElement, ReactNode } from "react";

interface IProp {
  color?: string;
  textColor?: string;
  content?: string;
  logo?: ReactNode;
}

function Button({
  color = "black",
  textColor = "gray-500",
  content,
  logo,
}: IProp) {
  return (
    <div className={`text-${textColor} hover:bg-light bg-${color} `}>
      {content}
      {logo}
    </div>
  );
}

export default Button;
