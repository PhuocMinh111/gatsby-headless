import React, { useContext, useEffect, useState } from "react";

import nyan from "../images/nyan.gif";

import { motion } from "framer-motion";
import { calculateMove } from "../utils/utils";
import useViewPort from "../hooks/useViewPort";
import { UseContext } from "../context/context";
import { useCatContext } from "../context/catContext";

const RunningCat = ({ onFinish, onClick, w, h }: any) => {
  const variants = calculateMove(w, h);
  const { speed } = useCatContext();

  let finalSpeed = speed;
  if (w < 400 || h < 400) {
    finalSpeed = (finalSpeed * 2) / 3;
  }
  console.log(finalSpeed);

  //--- speed-----
  const time = w / finalSpeed;

  //---------

  return (
    <motion.div
      initial={"begin"}
      animate={"end"}
      onClick={onClick}
      transition={{ duration: time, type: "easeOut" }}
      variants={variants}
      onAnimationComplete={onFinish}
      id="running-cat-rail"
      className="relative top-1/2  left-1/2 rot origin-center
-translate-x-1/2 -translate-y-1/2 z-[1000]  h-[50px] w-[100px]
"
    >
      {/* runningCat */}
      <div>
        <img
          className="bg-size w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] rounded-md z-[1000] object-cover"
          alt="running cat"
          src={nyan}
        />
      </div>
    </motion.div>
  );
};

export default RunningCat;
