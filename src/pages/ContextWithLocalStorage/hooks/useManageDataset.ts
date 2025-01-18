import { useEffect } from "react";

import {
  useContextWithLocalStorageState,
  useContextWithLocalStorageDispatch,
} from "@Pages/ContextWithLocalStorage/contexts/ContextWithLocalStorageContext";
import { updateDataset } from "@Pages/ContextWithLocalStorage/reducers/actions";
import { useRequestDataset } from "@Pages/ContextWithLocalStorage/requests/useRequestDataset";

export const useManageDataset = () => {
  const { dataset, datasetIndex } = useContextWithLocalStorageState();
  const dispatch = useContextWithLocalStorageDispatch();

  const { refetch: refetchDataset } = useRequestDataset(datasetIndex);

  useEffect(() => {
    (async () => {
      // only fetch a new data set if the current dataset is empty
      if (!Array.isArray(dataset) || dataset.length !== 0) {
        return;
      }

      const newDataset = await refetchDataset();
      if (!newDataset) {
        return;
      }

      updateDataset(dispatch, newDataset);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datasetIndex]);
};
