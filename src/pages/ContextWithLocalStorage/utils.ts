import { DatasetArray } from "@Pages/ContextWithLocalStorage/requests/useRequestDataset";

export const getCurrentTestCase = (
  testCaseId: number,
  dataset: DatasetArray | null,
) => (dataset?.length ? dataset[testCaseId] : null);
