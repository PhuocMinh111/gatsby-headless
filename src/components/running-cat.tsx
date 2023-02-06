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
  console.log(speed);
  const { vw, vh } = useViewPort();
  console.log(vw, vh);

  //--- speed-----
  const time = w / speed;

  //---------

  return (
    <motion.div
      initial={"begin"}
      animate={"end"}
      onClick={onClick}
      transition={{ duration: time, type: "normal" }}
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
          className="bg-size z-[1000] object-cover"
          alt="running cat"
          src={nyan}
          width={100}
          height={50}
        />
      </div>
    </motion.div>
  );
};

export default RunningCat;
