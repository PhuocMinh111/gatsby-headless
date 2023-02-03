import React from "react";
import Button from "./button";
import { theme } from "../theme/theme";
import SliderComp from "./slider";
import {
  DOWN_PAYMENT,
  INTEREST,
  PURCHASE_PRICE,
  REPAY_TIME
} from "../context/actions";

function Calculator() {
  return (
    <div className="flex flex-col gap-5 sm:gap-8 sm:flex-row-reverse w-100 mt-5 px-3 sm:px-5 py-5 sm:pb-20">
      {/* intro */}
      <div className="flex flex-col sm:w-1/2 py-3 text-left">
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
      </div>

      {/* calculator */}

      <div className="flex flex-col px-5 sm:w-1/2 bg-black py-5 text-light">
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
            max={1000000}
            step={100}
            name={PURCHASE_PRICE}
            title="Purchase Price"
          />
          {/* down payment */}
          <SliderComp
            name={DOWN_PAYMENT}
            min={1000}
            max={1000000}
            step={100}
            title="Down Payment"
          />
          {/* repay time */}
          <SliderComp
            name={REPAY_TIME}
            min={1}
            max={100}
            step={1}
            title="Repayment time"
          />
          {/* interest */}
          <SliderComp
            step={0.1}
            min={0}
            max={50}
            name={INTEREST}
            title="Interest Rate"
          />
        </div>
        <div className="result font-[700] text-[40] flex flex-col gap-0">
          <div>
            Loan Amount <span className="text-[40px] text-orange">{}</span>
          </div>
          <div>
            Estimated repayment per month:
            <span className="text-[40px] text-orange">{}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
