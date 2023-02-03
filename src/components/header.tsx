import React, { useState } from "react";
import Button from "./button";
import { BsGithub } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "../theme/theme";
import Logo from "./logo";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full text-light py-5 px-5 sm:px-10 bg-black">
      <div className="flex container items-center mx-auto max-w-mdFull justify-between ">
        {/* logo */}
        <Logo />
        {/* Md Menu */}
        <div className="text-gray-300 cursor-point font-[32px] hidden sm:flex justify-center gap-10 menu">
          <Button scrollTo="calculator" content="Calculator" />
          <Button scrollTo="info" content="Service" />
        </div>
        {/*  */}

        {/*Sm toggle button */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex sm:hidden  text-xl"
        >
          <motion.div
            animate={{ opacity: 1, rotate: 0 }}
            initial={{ opacity: 0, rotate: 45 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {!openMenu ? <BiMenu /> : <AiOutlineClose />}
          </motion.div>
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
    hidden: { opacity: 0, x: 0, y: -30 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -30 }
  };
  return (
    <motion.div
      initial="hidden"
      animate="enter"
      transition={{ duration: 0.5 }}
      variants={variant}
      className="sm:hidden flex flex-col gap-3 w-1/2 z-10
    bg-light border-dark py-3 px-3 dark:text-secondLight
    dark:bg-dark
    items-start absolute top-[70px] right-[5px]"
    >
      <Button
        scrollTo="calculator"
        style={{ backgroundColor: "white", color: "black" }}
        content="Calculator"
      ></Button>
      <Button
        scrollTo="info"
        style={{ backgroundColor: "white", color: "black" }}
        content="Service"
      ></Button>
    </motion.div>
  );
};

export default Header;
