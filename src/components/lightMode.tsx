import React, { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ImSun } from "react-icons/im";
import { RiMoonClearLine } from "react-icons/ri";
import { UseContext } from "../context/context";

function LightMode() {
  const { lightMode, toggleLightMode } = UseContext();
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "flex" }}
        key={lightMode ? "light" : "dark"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className={`flex items-center p-2 sm:p-3 rounded-md  text-md sm:text-xl ${
            lightMode ? "bg-[#6C47C1] text-dark " : "bg-[#F5AC54] text-light"
          }`}
          onClick={toggleLightMode}
        >
          {lightMode ? <RiMoonClearLine /> : <ImSun />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default LightMode;
