import { TOGGLE_COLOR_MODE } from "./actions";
import type { ReducerAction } from "react";

//app state
export interface AppState {
  lightMode: boolean;
  purchasePrice: number;
  downPayMent: number;
  repayTime: number;
  interest: number;
  toggleLightMode: () => void;
  calCulatePrice: () => void;
}
//

const reducer = (
  state: AppState,
  action: { type: string; payload?: any }
): AppState => {
  switch (action.type) {
    //light mode
    case TOGGLE_COLOR_MODE:
      return { ...state, lightMode: !state.lightMode };
    //

    default:
      return state;
  }
};

export default reducer;
