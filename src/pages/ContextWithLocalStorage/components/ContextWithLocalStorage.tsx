import { Stack, Typography, Button } from "@mui/material";

import {
  CONTEXT_WITH_LOCAL_STORAGE_KEY,
  useContextWithLocalStorageState,
  useContextWithLocalStorageDispatch,
} from "@Pages/ContextWithLocalStorage/contexts/ContextWithLocalStorageContext";
import { useManageDataset } from "@Pages/ContextWithLocalStorage/hooks/useManageDataset";
import { useManageDatasetIndex } from "@Pages/ContextWithLocalStorage/hooks/useManageDatasetIndex";
import { useManageTestCaseId } from "@Pages/ContextWithLocalStorage/hooks/useManageTestCaseId";
import { updateTestCaseId } from "@Pages/ContextWithLocalStorage/reducers/actions";
import { getCurrentTestCase } from "@Pages/ContextWithLocalStorage/utils";

export const ContextWithLocalStorage: React.FC = () => {
  const dispatch = useContextWithLocalStorageDispatch();
  const { testCaseId, dataset } = useContextWithLocalStorageState();

  // load and manage the dataset values
  useManageDataset();
  useManageDatasetIndex();
  useManageTestCaseId();

  const currentDatasetId = getCurrentTestCase(testCaseId, dataset) || "1";

  const handleOnClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    updateTestCaseId(dispatch, testCaseId + 1);
  };

  return (
    <Stack>
      <Typography mb="20px">
        This page uses context with local storage to handle state. This has been
        done to imitiate the storage of a dataset in localstorage, and to keep
        track of the dataset index property.
      </Typography>

      <Typography mb="20px">
        Note: once you have supassed the amount of datasets available, the logic
        will break. Clear the local storage object, to reset the counter:{" "}
        <Typography fontWeight="bold">
          {CONTEXT_WITH_LOCAL_STORAGE_KEY}
        </Typography>
        .
      </Typography>

      <Typography fontWeight="bold" mb="20px">
        Test Case {testCaseId + 1} of {dataset?.length}
      </Typography>

      <Stack mb="20px">
        <Typography fontWeight="bold">
          Dataset ID: {currentDatasetId}
        </Typography>
        <Typography>
          The Dataset ID is an ID from a dataset that has been requested
        </Typography>
      </Stack>

      <Button
        variant="contained"
        onClick={handleOnClick}
        sx={{ maxWidth: "200px" }}
      >
        Get New Dataset ID
      </Button>
    </Stack>
  );
};
