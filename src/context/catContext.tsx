import React, { createContext, useContext, useState } from "react";
const step = 3;
const base = 120;

const defaultValue = {
  speed: base,

  increaseSpeed: () => {},
  decreaseSpeed: () => {}
};

const CatContext = createContext(defaultValue);

function CatProvider({ children }: any) {
  const [speed, setSpeed] = useState(defaultValue.speed);

  const state = {
    speed: speed,
    increaseSpeed: () => {
      setSpeed(prev => prev + step);
    },
    decreaseSpeed: () => {
      setSpeed(prev => {
        return prev - step < base ? base : prev - step;
      });
    }
  };

  return <CatContext.Provider value={state}>{children}</CatContext.Provider>;
}

export default CatProvider;

export const useCatContext = () => {
  return useContext(CatContext);
};
