import { useEffect } from "react";

import {
  useContextWithLocalStorageState,
  useContextWithLocalStorageDispatch,
} from "@Pages/ContextWithLocalStorage/contexts/ContextWithLocalStorageContext";
import {
  resetTestCaseId,
  resetDataset,
  updateDatasetIndex,
} from "@Pages/ContextWithLocalStorage/reducers/actions";
import { DatasetArray } from "@Pages/ContextWithLocalStorage/requests/useRequestDataset";

type DatasetIndexMutationHanderProps = {
  dataset: DatasetArray | null;
  testCaseId: number;
};
const shouldDatasetIndexUpdate = ({
  dataset,
  testCaseId,
}: DatasetIndexMutationHanderProps): boolean => {
  if (testCaseId === 0) {
    return false;
  }

  return dataset !== null && testCaseId > dataset.length - 1;
};

export const useManageDatasetIndex = () => {
  const dispatch = useContextWithLocalStorageDispatch();
  const { dataset, testCaseId, datasetIndex } =
    useContextWithLocalStorageState();

  useEffect(() => {
    (async () => {
      if (testCaseId === null || datasetIndex === null) {
        return;
      }

      // if dataset index is greater than the length of the dataset array, update dataset index
      // (this will initiate a request for a new dataset)
      const shouldUpdateDatasetIndex = shouldDatasetIndexUpdate({
        dataset,
        testCaseId,
      });

      if (!shouldUpdateDatasetIndex) {
        return;
      }

      updateDatasetIndex(dispatch, datasetIndex + 1);

      // reset set test ID and remove the current dataset
      resetTestCaseId(dispatch);
      resetDataset(dispatch);
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testCaseId, dataset, datasetIndex]);
};
