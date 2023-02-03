import { AppState } from "./reducer";
import React, { createContext, useReducer, useState, useContext } from "react";
import { CALCULATE_PRICE, SET_VALUE, TOGGLE_COLOR_MODE } from "./actions";
import reducer from "./reducer";

const defaultValue: AppState = {
  lightMode: true,
  purchasePrice: 0,
  repayTime: 0,
  interest: 0.1,
  downPayMent: 0,
  loanAmount: 0,
  repayPerMonth: 0,
  toggleLightMode: () => {},
  calCulatePrice: () => {},
  setValue: () => {}
};
//create context
const AppContext = createContext<AppState>(defaultValue);

// app provider
function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const value: AppState = {
    ...state,
    toggleLightMode: () => {
      dispatch({ type: TOGGLE_COLOR_MODE });
    },
    calCulatePrice: (name: string, amount: number) => {
      dispatch({
        type: CALCULATE_PRICE,
        payload: { name: name, amount: amount }
      });
    },
    setValue: (name, value) => {
      dispatch({
        type: SET_VALUE,
        payload: { name: name, value: value }
      });
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
