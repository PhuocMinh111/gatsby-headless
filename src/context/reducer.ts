import { TOGGLE_COLOR_MODE } from "./actions";
import type { ReducerAction } from "react";

//app state
export interface AppState {
  lightMode: boolean;
  toggleLightMode: () => void;
}
//

const reducer = (
  state: AppState,
  action: { type: String; payload?: any }
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
