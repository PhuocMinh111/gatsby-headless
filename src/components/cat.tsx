import { CircularProgress } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Cat() {
  const [catUrl, setCat] = useState("");

  useEffect(() => {
    fetchCat();
  }, []);

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
        className="w-100 mt-5 h-[500px] flex flex-col gap-5 items-center"
      >
        <div className="h-[400px]">
          {catUrl.length > 2 ? (
            <motion.img
              initial={{ opacity: 0, rotate: 720 }}
              transition={{ duration: 1, delay: 0.5 }}
              animate={{ opacity: 1, rotate: 0 }}
              src={catUrl}
              alt="cat"
              className="w-[95%] h-[400px] object-cover"
            />
          ) : (
            <CircularProgress />
          )}
        </div>
        <div
          onClick={moreCat}
          className="py-3 cursor-pointer px-5 text-light bg-orange"
        >
          More cats !
        </div>
      </div>
    </AnimatePresence>
  );
}

export default Cat;
