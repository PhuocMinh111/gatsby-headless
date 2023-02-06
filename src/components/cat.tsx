import { CircularProgress } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import RunningCat from "./running-cat";
import RunningCatContainer from "./running-cat-container";

function Cat() {
  const [catUrl, setCat] = useState("");

  const [caught, setCaught] = useState(0);
  useEffect(() => {
    fetchCat();
  }, []);
  // caught function
  const onCaught = () => {
    setCaught(prev => prev + 1);
  };
  const onLost = () => {
    setCaught(prev => {
      if (prev === 0) return 0;
      return prev - 1;
    });
  };
  //fetch cat
  const moreCat = () => {
    setCat("");
    fetchCat();
  };

  const fetchCat = async () => {
    fetch("https://api.thecatapi.com/v1/images/search?size=small")
      .then(res => res.json())
      .then(data => setCat(data[0].url))
      .catch(err => {});
  };
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <div
        id="cat"
        className="w-100 overflow-hidden mt-5 py-20 mb-10 relative h-auto flex flex-col gap-5 items-center"
      >
        <div className="h-[400px]">
          {catUrl.length > 2 ? (
            <motion.img
              initial={{ opacity: 0, rotate: 720 }}
              transition={{ duration: 1, delay: 0.5 }}
              animate={{ opacity: 1, rotate: 0 }}
              src={catUrl}
              alt="cat"
              className="max-w-[95%] h-[400px] object-cover"
            />
          ) : (
            <CircularProgress />
          )}
        </div>
        <div
          onClick={moreCat}
          className="py-3 z-[100] cursor-pointer px-5 text-light bg-orange"
        >
          More cats !
        </div>
        <RunningCatContainer onLost={onLost} onCaught={onCaught} />
        <div
          id="cat-point"
          className="absolute top-[5px] right-[15px] sm:right-[30px] text-2xl"
        >
          {caught} Cats caught !
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Cat;
