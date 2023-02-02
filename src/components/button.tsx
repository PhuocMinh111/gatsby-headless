import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  StyleHTMLAttributes
} from "react";

function Button({
  style = {},
  content,
  logo
}: {
  style?: CSSProperties;
  content?: string;
  logo?: ReactNode;
}) {
  return (
    <div
      style={style}
      className={` flex items-center justify-center hover:underline bg-black text-gray-200 ${style} `}
    >
      {content}
      {logo}
    </div>
  );
}

export default Button;
