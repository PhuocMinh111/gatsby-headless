import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const base = {
  hidden: { opacity: 0, x: -50, y: 0 },
  animate: { opacity: 1, x: 0, y: 0 }
  // exit: { opacity: 1, x: 0, y: 0 }
};

function AnimationWrapper({ children, variants = base }: any) {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        initial="hidden"
        animate="animate"
        // exit="exit"
        whileInView={{ opacity: 1, x: 0 }}
        variants={variants}
        className="h-[400px]"
        transition={{ duration: 0.5, type: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimationWrapper;
