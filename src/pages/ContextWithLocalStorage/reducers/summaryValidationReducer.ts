import { contextWithLocalStorageReducer } from "@Pages/ContextWithLocalStorage/reducers/reducers";
import {
  Action,
  ContextWithLocalStorageState,
} from "@Pages/ContextWithLocalStorage/reducers/types";

function billingReducer(state: ContextWithLocalStorageState, action: Action) {
  contextWithLocalStorageReducer(state, action);
}

export default billingReducer;
