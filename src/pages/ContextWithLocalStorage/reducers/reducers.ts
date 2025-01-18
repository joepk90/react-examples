/* eslint-disable no-plusplus */

/* eslint-disable no-param-reassign */
import {
  Action,
  ActionTypes,
  ContextWithLocalStorageState,
} from "@Pages/ContextWithLocalStorage/reducers/types";

/**
 * Context With Local Storage Reducers:
 * - uses draft functionality from immer library
 * - users useImmerReducer in provider: https://immerjs.github.io/immer/#how-immer-works
 */

/**
 * @param draft
 * @param action
 */
export const contextWithLocalStorageReducer = (
  draft: ContextWithLocalStorageState,
  action: Action,
) => {
  switch (action.type) {
    case ActionTypes.UPDATE_DATASET: {
      draft.dataset = action.payload;
      break;
    }
    case ActionTypes.UPDATE_DATASET_INDEX: {
      draft.datasetIndex = action.payload;
      break;
    }
    case ActionTypes.UPDATE_TEST_CASE_ID: {
      draft.testCaseId = action.payload;
      break;
    }
    default:
      break;
  }
};
