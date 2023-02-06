import React, { useEffect, useState } from "react";

import nyan from "../images/nyan.gif";

import { motion } from "framer-motion";
import { calculateMove } from "../utils/utils";
import useViewPort from "../hooks/useViewPort";

const RunningCat = ({ onFinish, onClick }: any) => {
  const variants = calculateMove(375, 600);
  console.log(variants);
  //--- capture cat-----

  //---------

  return (
    <motion.div
      initial={"begin"}
      animate={"end"}
      onClick={onClick}
      transition={{ duration: 3, type: "easeInOut" }}
      variants={variants}
      onAnimationComplete={onFinish}
      id="running-cat-rail"
      className="relative top-1/2 z-[1000] left-1/2 rot origin-center
-translate-x-1/2 -translate-y-1/2 bg-red-500 h-[50px] w-[100px]
"
    >
      {/* runningCat */}
      <div>
        <img
          className="bg-size object-cover"
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
