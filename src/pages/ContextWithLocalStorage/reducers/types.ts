import { DatasetArray } from "@Pages/ContextWithLocalStorage/requests/useRequestDataset";

type ActionMap<M extends { [index: string]: unknown }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type DatasetState = DatasetArray;
export type DatasetIndexState = number;
export type TestCaseIDState = number;

export type ContextWithLocalStorageState = {
  datasetIndex: DatasetIndexState;
  dataset: DatasetState;
  testCaseId: TestCaseIDState;
};

export enum ActionTypes {
  UPDATE_DATASET = "UPDATE_DATASET",
  UPDATE_DATASET_INDEX = "UPDATE_DATASET_INDEX",
  UPDATE_TEST_CASE_ID = "UPDATE_TEST_CASE_ID",
}

type ActionPayload = {
  [ActionTypes.UPDATE_DATASET]: DatasetState;
  [ActionTypes.UPDATE_DATASET_INDEX]: DatasetIndexState;
  [ActionTypes.UPDATE_TEST_CASE_ID]: TestCaseIDState;
};

export type Action = ActionMap<ActionPayload>[keyof ActionMap<ActionPayload>];

export type Dispatch = (action: Action) => void;
