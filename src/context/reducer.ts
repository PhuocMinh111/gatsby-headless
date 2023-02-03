import {
  APP_STATE,
  DOWN_PAYMENT,
  INTEREST,
  PURCHASE_PRICE,
  REPAY_TIME,
  SET_VALUE,
  TOGGLE_COLOR_MODE
} from "./actions";

//app state
export interface AppState {
  lightMode: boolean;
  purchasePrice: number;
  downPayMent: number;
  repayTime: number;
  interest: number;
  error?: boolean;
  errorMsg?: string;
  loanAmount: number;
  repayPerMonth: number;
  toggleLightMode: () => void;
  setValue: (name: string, value: number | null | undefined) => void;
  calCulatePrice: (name: string, amount: number) => void;
  setErr: () => void;
}
//
// persist return

const setItem = (state: AppState) => {
  if (typeof window !== undefined) {
    window.localStorage.setItem(APP_STATE, JSON.stringify(state));
  }
  return;
};

const reducer = (
  state: AppState,
  action: { type: string; payload?: any }
): AppState => {
  switch (action.type) {
    //light mode
    case TOGGLE_COLOR_MODE:
      return { ...state, lightMode: !state.lightMode };
    //
    case SET_VALUE:
      const { name, value } = action.payload;
      let temp = stateHandler(state, name, value);

      if (temp.purchasePrice > temp.downPayMent) {
        temp.loanAmount = temp.purchasePrice - temp.downPayMent;
        const { loanAmount: P, interest: R, repayTime: y } = temp;
        const n = y * 12;
        const r = R / 100;

        const M = P * (r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)));

        temp.repayPerMonth = M < 1000000 ? parseFloat(M.toFixed(3)) : 0;

        temp = { ...temp, error: false, errorMsg: "" };
        setItem(temp);
        return { ...temp };
      } else {
        temp.loanAmount = 0;
        temp.repayPerMonth = 0;
        setItem(temp);
        return { ...temp };
      }
      setItem(temp);
      return { ...temp };

    default:
      setItem(state);
      return { ...state };
  }
};

//state handle

function stateHandler(state: AppState, name: string, value: number): AppState {
  const temp = { ...state };
  switch (name) {
    case PURCHASE_PRICE:
      return { ...state, purchasePrice: value };
    case DOWN_PAYMENT:
      return { ...state, downPayMent: value };
    case INTEREST:
      return { ...state, interest: value };
    case REPAY_TIME:
      return { ...state, repayTime: value };
    default:
      break;
  }

  return temp;
}

export default reducer;
