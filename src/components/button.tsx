import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  Ref,
  RefObject,
  StyleHTMLAttributes
} from "react";
import useOffsetTop from "../hooks/useOffsetTop";

function Button({
  style = {},
  content,
  logo,
  scrollTo = ""
}: {
  style?: CSSProperties;
  content?: string;
  logo?: ReactNode;
  scrollTo?: string;
}) {
  const offset = useOffsetTop(scrollTo);

  function handleClick() {
    if (scrollTo) {
      return window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
    return;
  }
  return (
    <div
      style={style}
      onClick={handleClick}
      className={` flex cursor-pointer items-center justify-center hover:underline bg-black text-gray-200 ${style} `}
    >
      {content}
      {logo}
    </div>
  );
}

export default Button;
