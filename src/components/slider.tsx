import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import styled from "@emotion/styled";
import { theme } from "../theme/theme";
import {
  DOWN_PAYMENT,
  INTEREST,
  PURCHASE_PRICE,
  REPAY_TIME,
  SET_VALUE
} from "../context/actions";
import { UseContext } from "../context/context";
interface IProps {
  title: string;
  default?: number;
  step?: number;
  min?: number;
  max?: number;
  name: string;
  initial?: number | undefined;
}

//default props
const base: IProps = {
  title: "",
  default: 0,
  step: 100,
  min: 0,
  max: 1000,
  name: "",
  initial: 0
};

function SliderComp({ ...props }: IProps) {
  const { error, errorMsg, setValue, loanAmount } = UseContext();
  const [value, setValueState] = useState<number | number[] | undefined>(0);
  const [guard, setGuard] = useState(true);
  const [errMsg, setMsg] = useState("");
  //exceed down payment

  function onChange(e: Event, newValue: number | number[]) {
    if (typeof newValue === "number") {
      setValueState(newValue);
      setValue(props.name, newValue);
    }
  }
  useEffect(() => {
    setValueState(props.initial);
  }, [props.initial]);

  return (
    <Wrapper className="flex min-w-[250px] flex-col">
      <div className="div mt-3 text-[18px] font-[700]">
        {props.title +
          " " +
          `${
            !(props.name === INTEREST)
              ? getFormat(props.name) + " " + value
              : value + " " + getFormat(props.name)
          }`}
      </div>
      <Slider
        value={value}
        min={props.min}
        step={props.step}
        max={props.max}
        onChange={onChange}
      ></Slider>
      <div className="text-red-500 text-[10px]">{errMsg}</div>
    </Wrapper>
  );
}

//styled Wrapper
const Wrapper = styled.div`
  .MuiSlider-rail {
    height: 10px;
    background-color: white;
  }
  .MuiSlider-track {
    width: 10px;
    height: 15px;
    border: none;
    background-color: rgba(255, 128, 73, 0.69);
  }
  .MuiSlider-mark {
    color: ${theme.colors.light};
  }
  .MuiSlider-thumb {
    width: 20px;
    height: 20px;
    background-color: ${theme.colors.orange};
    &::after {
      background-color: white;
      height: 8px;
      width: 8px;
    }
    .MuiSlider-mark {
      display: none;
    }
  }
`;

//get format
function getFormat(name: string): string {
  let result: string = "";
  if (name === DOWN_PAYMENT || name === PURCHASE_PRICE) {
    result = "$";
  } else if (name === REPAY_TIME) {
    result = "years";
  } else if (name === INTEREST) {
    result = "%";
  }

  return result;
}

SliderComp.defaultProps = base;

export default SliderComp;
