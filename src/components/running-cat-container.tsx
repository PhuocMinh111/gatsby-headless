import React, { useEffect, useRef, useState } from "react";
import RunningCat from "./running-cat";
import { motion } from "framer-motion";

import nyan from "../images/nyan.gif";

import useViewPort from "../hooks/useViewPort";
import { flip } from "../utils/utils";

const RunningCatContainer = () => {
  const railRef = useRef(null);
  const containerRef = useRef(null);

  // respawn
  const [spawn, setSpawn] = useState(true);
  const onFinish = () => {
    setSpawn(false);
    setTimeout(() => {
      setSpawn(true);
    }, 500);
  };
  //--------
  const isFlip = Math.floor(Math.random() * 10) % 2 === 0;
  function capture() {
    setSpawn(false);
    setTimeout(() => {
      setSpawn(true);
    }, 500);
  }

  return (
    <div
      ref={containerRef}
      style={{ transform: `rotateY(${isFlip ? "180deg" : "0deg"})` }}
      className="bg-transparent
    absolute z-[900] top-0 left-0 w-full h-full 
    "
    >
      {spawn && <RunningCat onClick={capture} onFinish={onFinish} />}
    </div>
  );
};

export default RunningCatContainer;
