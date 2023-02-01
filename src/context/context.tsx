import { AppState } from "./reducer";
import React, { createContext, useReducer, useState, useContext } from "react";
import { TOGGLE_COLOR_MODE } from "./actions";
import reducer from "./reducer";

const defaultValue: AppState = {
  lightMode: true,
  toggleLightMode: () => {},
};
//create context
const AppContext = createContext<AppState>(defaultValue);

// app provider
function AppProvider({ children }: any) {
  const [state, dispatch] = useReducer(reducer, defaultValue);
  const value: AppState = {
    lightMode: state.lightMode,
    toggleLightMode: () => {
      dispatch({ type: TOGGLE_COLOR_MODE });
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// use context hook
export const UseContext = () => {
  return useContext(AppContext);
};
//
export default AppProvider;
