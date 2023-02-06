import React, { createContext, useContext, useState } from "react";

const defaultValue = {
  speed: 180,

  increaseSpeed: () => {},
  decreaseSpeed: () => {}
};
const step = 3;

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
        return prev - step < 180 ? 180 : prev - step;
      });
    }
  };

  return <CatContext.Provider value={state}>{children}</CatContext.Provider>;
}

export default CatProvider;

export const useCatContext = () => {
  return useContext(CatContext);
};
