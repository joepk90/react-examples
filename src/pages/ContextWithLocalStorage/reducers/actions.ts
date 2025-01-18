import {
  Dispatch,
  ActionTypes,
  DatasetState,
  DatasetIndexState,
  TestCaseIDState,
} from "@Pages/ContextWithLocalStorage/reducers/types";

export function updateDataset(dispatch: Dispatch, payload: DatasetState): void {
  dispatch({ type: ActionTypes.UPDATE_DATASET, payload });
}

export function resetDataset(dispatch: Dispatch): void {
  dispatch({ type: ActionTypes.UPDATE_DATASET, payload: [] });
}

export function updateDatasetIndex(
  dispatch: Dispatch,
  payload: DatasetIndexState,
): void {
  dispatch({ type: ActionTypes.UPDATE_DATASET_INDEX, payload });
}

export function updateTestCaseId(
  dispatch: Dispatch,
  payload: TestCaseIDState,
): void {
  dispatch({ type: ActionTypes.UPDATE_TEST_CASE_ID, payload });
}

export function resetTestCaseId(dispatch: Dispatch): void {
  dispatch({ type: ActionTypes.UPDATE_TEST_CASE_ID, payload: 0 });
}
