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

  //--- speed-----
  const time = w / finalSpeed;

  //---------

  return (
    <motion.div
      initial={"begin"}
      animate={"end"}
      onClick={onClick}
      transition={{ duration: time, type: "easeInOut" }}
      variants={variants}
      onAnimationComplete={onFinish}
      id="running-cat-rail"
      className="relative top-1/2  left-1/2 rot origin-center
-translate-x-1/2 -translate-y-1/2  flex items-center justify-center z-[1000]  h-[120px] w-[120px] rounded-full
"
    >
      {/* runningCat */}

      <img
        className="bg-size w-[70px] h-[50px] sm:w-[100px] sm:h-[70px] rounded-md z-[1000] object-cover"
        alt="running cat"
        src={nyan}
      />
    </motion.div>
  );
};

export default RunningCat;
