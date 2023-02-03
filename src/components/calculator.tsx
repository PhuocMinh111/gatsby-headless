import React, { useEffect, useRef, useState } from "react";
import Button from "./button";
import { theme } from "../theme/theme";
import SliderComp from "./slider";
import { AnimatePresence, AnimationType, motion } from "framer-motion";
import {
  DOWN_PAYMENT,
  INTEREST,
  PURCHASE_PRICE,
  REPAY_TIME
} from "../context/actions";
import { UseContext } from "../context/context";
import { CircularProgress } from "@mui/material";

const Calculator = () => {
  const {
    loanAmount,
    downPayMent,
    repayTime,
    interest,
    purchasePrice,
    repayPerMonth
  } = UseContext();
  const [catUrl, setCat] = useState("");
  // cat ref
  const catRef = useRef(null);

  useEffect(() => {
    fetchCat();
  }, []);

  const moreCat = () => {
    setCat("");
    fetchCat();
  };
  const fetchCat = async () => {
    fetch(
      "https://api.thecatapi.com/v1/images/search?size=small&mime_types=gif"
    )
      .then(res => res.json())
      .then(data => setCat(data[0].url))
      .catch(err => {});
  };
  const checkDelay = (ref: any) => {
    if (ref.current.naturalHeight === 0) return 0.5;
    return 0.2;
  };
  return (
    <div>
      <div
        id="calculator"
        className="flex overflow-hidden flex-col gap-5 sm:gap-8 sm:flex-row-reverse w-100 mt-5 px-3 sm:px-5 py-5 sm:pb-20"
      >
        {/* intro */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:w-1/2 py-3 text-left"
        >
          <div className="text-[55px] max-w-[500px] font-[800] leading-[80px] ">
            Try our awesome Calculator
          </div>
          <p className="mt-5 text-[18px] text-[#585C65] leading-[30px] font-thin max-w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <Button
            style={{
              width: "150px",
              height: "60px",
              backgroundColor: theme.colors.orange,
              marginTop: "30px"
            }}
            content="register"
          ></Button>
        </motion.div>

        {/* calculator */}

        <motion.div
          initial={{ opacity: 0, x: 0, y: 60 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col px-5 sm:w-1/2 bg-black py-5 text-light"
        >
          <div className="text-[50px] font-[800] leading-[70px] text-light">
            Mortgage Calculator
          </div>
          <p className="max-w-[500px] text-light text-[16px] leading-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <div className="flex flex-col gap-5 sm:gap-8 sm:flex-row sm:flex-wrap max-w-[550px]">
            {/* purchase price */}
            <SliderComp
              min={1000}
              max={2500000}
              step={500}
              name={PURCHASE_PRICE}
              initial={purchasePrice}
              title="Purchase Price"
            />
            {/* down payment */}
            <SliderComp
              name={DOWN_PAYMENT}
              min={1000}
              max={2000000}
              step={500}
              initial={downPayMent}
              title="Down Payment"
            />
            {/* repay time */}
            <SliderComp
              name={REPAY_TIME}
              min={1}
              max={50}
              step={1}
              initial={repayTime}
              title="Repayment time"
            />
            {/* interest */}
            <SliderComp
              step={0.1}
              min={0}
              max={20}
              name={INTEREST}
              initial={interest}
              title="Interest Rate"
            />
          </div>
          <div className="result font-[700] text-[40] flex flex-col gap-0">
            <div>
              Loan Amount:{" "}
              <span className="text-[40px] text-orange">
                {new Intl.NumberFormat("en-EN", {
                  style: "currency",
                  currency: "USD"
                }).format(loanAmount)}
              </span>
            </div>
            <div>
              Estimated repayment per month:
              <span className="text-[40px] text-orange">
                {repayPerMonth > 0 &&
                  new Intl.NumberFormat("en-EN", {
                    style: "currency",
                    currency: "USD"
                  }).format(repayPerMonth)}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
      <AnimatePresence exitBeforeEnter initial={false}>
        <div
          id="cat"
          className="w-100 mt-5 h-[500px] flex flex-col gap-5 items-center"
        >
          <div className="h-[400px]">
            {catUrl.length > 2 ? (
              <motion.img
                ref={catRef}
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
    </div>
  );
};

export default Calculator;
