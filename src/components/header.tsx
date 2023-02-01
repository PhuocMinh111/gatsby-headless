import React, { useState } from "react";
import Button from "./button";
import { BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { theme } from "../theme/theme";
import Logo from "./Logo";
function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full text-light py-5 px-5 sm:px-10 bg-black">
      <div className="flex container items-center mx-auto max-w-mdFull justify-between ">
        {/* logo */}
        <Logo />
        {/* Md Menu */}
        <div className="text-gray-300 cursor-point font-[32px] hidden sm:flex justify-center gap-10 menu">
          <Button content="Calculator" />
          <Button content="Service" />
        </div>
        {/*  */}

        {/*Sm toggle button */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex sm:hidden text-xl"
        >
          <BiMenu />
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
      className="sm:hidden flex flex-col gap-3 w-1/2 
    bg-slate-50 border-dark py-3 px-3 dark:text-secondLight
    dark:bg-dark
    items-start absolute top-[100px] right-[5px]"
    >
      <Button
        bg={theme.colors.light}
        textColor={theme.colors.black}
        content="Calculator"
      ></Button>
      <Button
        bg={theme.colors.light}
        textColor={theme.colors.black}
        content="Service"
      ></Button>
    </motion.div>
  );
};

export default Header;
