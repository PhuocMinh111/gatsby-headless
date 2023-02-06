import React, { useEffect, useRef, useState } from "react";
import RunningCat from "./running-cat";
import { motion } from "framer-motion";

import nyan from "../images/nyan.gif";

import useViewPort from "../hooks/useViewPort";
import { flip } from "../utils/utils";
import useSizeDiv from "../hooks/useSizeDiv";
import { useCatContext } from "../context/catContext";

const RunningCatContainer = ({ onCaught, onLost }: any) => {
  const containerRef = useRef(null);
  const { w, h } = useSizeDiv(containerRef);

  // respawn
  const [spawn, setSpawn] = useState(true);
  const { increaseSpeed, decreaseSpeed } = useCatContext();
  // on Animation finish
  const onFinish = () => {
    onLost();
    decreaseSpeed();
    setSpawn(false);
    setTimeout(() => {
      setSpawn(true);
    }, 500);
  };
  //--------
  const isFlip = Math.floor(Math.random() * 10) % 2 === 0;

  //----capture cat-----

  function capture() {
    onCaught();
    increaseSpeed();
    setSpawn(false);
    setTimeout(() => {
      setSpawn(true);
    }, 500);
  }

  return (
    <div
      ref={containerRef}
      style={{ transform: `rotateY(${isFlip ? "180deg" : "0deg"})` }}
      className="bg-transparent overflow-hidden
    absolute z-[90] top-0 left-0 w-full h-full 
    "
    >
      {spawn && (
        <RunningCat
          w={w + 10}
          h={h + 10}
          onClick={capture}
          onFinish={onFinish}
        />
      )}
    </div>
  );
};

export default RunningCatContainer;
