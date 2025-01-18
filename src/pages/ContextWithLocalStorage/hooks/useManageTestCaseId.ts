import { useEffect } from "react";
import { useSearchParams } from "react-router";

import {
  useContextWithLocalStorageState,
  useContextWithLocalStorageDispatch,
} from "@Pages/ContextWithLocalStorage/contexts/ContextWithLocalStorageContext";
import { updateTestCaseId } from "@Pages/ContextWithLocalStorage/reducers/actions";

export const useManageTestCaseId = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { testCaseId } = useContextWithLocalStorageState();
  const dispatch = useContextWithLocalStorageDispatch();

  const id = Number(searchParams.get("id"));

  useEffect(() => {
    if (id === null) {
      return;
    }

    // on first load set the id using the URL param if set
    updateTestCaseId(dispatch, id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // update the URL param on state change
  useEffect(() => {
    setSearchParams((prev) => {
      prev.set("id", testCaseId.toString());
      return prev;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testCaseId]);
};
