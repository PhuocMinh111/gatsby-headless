import { AppState } from "./reducer";
import React, { createContext, useReducer, useState, useContext } from "react";
import { CALCULATE_PRICE, TOGGLE_COLOR_MODE } from "./actions";
import reducer from "./reducer";

const defaultValue: AppState = {
  lightMode: true,
  purchasePrice: 0,
  repayTime: 0,
  interest: 0,
  downPayMent: 0,
  toggleLightMode: () => {},
  calCulatePrice: () => {}
};
//create context
const AppContext = createContext<AppState>(defaultValue);

// app provider
function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const value: AppState = {
    lightMode: state.lightMode,
    purchasePrice: 0,
    repayTime: 0,
    interest: 0,
    downPayMent: 0,
    toggleLightMode: () => {
      dispatch({ type: TOGGLE_COLOR_MODE });
    },
    calCulatePrice: () => {
      dispatch({ type: CALCULATE_PRICE });
    }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// use context hook
export const UseContext = () => {
  return useContext(AppContext);
};
//
export default AppProvider;
