import React, { useState } from "react";
import Button from "./button";
import { BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { FaHamburger } from "react-icons/fa";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full text-light py-5 px-3 sm:px-5 bg-black">
      <div className="flex container items-center mx-auto max-w-mdFull justify-between ">
        {/* logo */}
        <div className="logo flex items-center gap-2">
          <div className="w-10 inline-flex items-center justify-center h-10  rounded-full bg-orange">
            K
          </div>
          <div className="inline max-w-[50px]">
            Kinka <br /> Fiance
          </div>
        </div>
        {/* Md Menu */}
        <div className="text-gray-300 cursor-point font-[32px] hidden sm:flex justify-center gap-10 menu">
          <Button content="Calculator" />
          <Button content="Service" />
        </div>
        {/*  */}

        {/*Sm toggle button */}
        <div onClick={() => setOpenMenu(!openMenu)} className="flex sm:hidden">
          <FaHamburger></FaHamburger>
        </div>
        {openMenu && <AnimatedMenu />}
        {/*  */}
      </div>
    </div>
  );
}

// Sm Menu

const AnimatedMenu = () => {
  const variant = {
    hidden: { opacity: 0, x: 0, y: -20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -20 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.5, type: "easeOut" }}
      variants={variant}
      className="sm:hidden flex flex-col w-1/2 
    bg-slate-50 border-dark dark:text-secondLight
    dark:bg-dark
    items-start absolute top-[60px] right-[5px]"
    >
      <Button content="Techs"></Button>
      <Button content="Chat"></Button>
      <Button content="Contact"></Button>
    </motion.div>
  );
};

export default Header;
