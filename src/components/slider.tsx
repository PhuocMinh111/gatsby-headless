import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import styled from "@emotion/styled";
import { theme } from "../theme/theme";
interface IProps {
  title: string;
  default?: number;
  step?: number;
  min?: number;
  max?: number;
}

//default props
const base: IProps = {
  title: "",
  default: 0,
  step: 100,
  min: 0,
  max: 1000
};

function SliderComp({ ...props }: IProps) {
  const [value, setValue] = useState<number>(0);
  function onChange(e: any) {
    setValue(e.target.value);
  }
  return (
    <Wrapper className="flex max-w-[250px] flex-col">
      <div className="div">{`${props.title} $${value}`}</div>
      <Slider
        value={value}
        step={props.step}
        marks
        min={props.min}
        max={props.max}
        onChange={onChange}
      ></Slider>
    </Wrapper>
  );
}

//styled Wrapper
const Wrapper = styled.div`
  .MuiSlider-rail {
    height: 10px;
    background-color: ${theme.colors.light};
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
  }
`;

SliderComp.defaultProps = base;

export default SliderComp;
