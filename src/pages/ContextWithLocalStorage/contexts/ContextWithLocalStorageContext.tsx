import React, { createContext, useEffect } from "react";
import { useImmerReducer } from "use-immer";

import { useLocalStorage } from "@Hooks/useLocalStorage";
import { contextWithLocalStorageReducer } from "@Pages/ContextWithLocalStorage/reducers/reducers";
import {
  ContextWithLocalStorageState,
  Action,
} from "@Pages/ContextWithLocalStorage/reducers/types";

export const CONTEXT_WITH_LOCAL_STORAGE_KEY =
  "context-with-local-storage-state";

export type Dispatch = (action: Action) => void;

const contextWithLocalStorageContext = createContext<
  ContextWithLocalStorageState | undefined
>(undefined);

const contextWithLocalStorageDispatchContext = createContext<
  Dispatch | undefined
>(undefined);

type ContextWithLocalStorageProviderProps = {
  children: React.ReactNode;
  state?: ContextWithLocalStorageState;
};

const initialState: ContextWithLocalStorageState = {
  datasetIndex: 0,
  dataset: [],
  testCaseId: 0,
};

export const ContextWithLocalStorageProvider = ({
  children,
  state,
}: ContextWithLocalStorageProviderProps) => {
  const {
    value,
    setValue,
    error: localStorageError,
  } = useLocalStorage<ContextWithLocalStorageState>(
    CONTEXT_WITH_LOCAL_STORAGE_KEY,
    initialState
  );

  const populatedState = value && !localStorageError ? value : initialState;
  const [summaryValidationState, dispatch] = useImmerReducer(
    contextWithLocalStorageReducer,
    state || populatedState
  );

  useEffect(() => {
    if (localStorageError) {
      return;
    }

    setValue(summaryValidationState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summaryValidationState]);

  return (
    <contextWithLocalStorageContext.Provider value={summaryValidationState}>
      <contextWithLocalStorageDispatchContext.Provider value={dispatch}>
        {children}
      </contextWithLocalStorageDispatchContext.Provider>
    </contextWithLocalStorageContext.Provider>
  );
};

export function useContextWithLocalStorageState(): ContextWithLocalStorageState {
  const context = React.useContext(contextWithLocalStorageContext);

  if (context === undefined) {
    throw new Error(
      "useContextWithLocalStorageState must be used within a ContextWithLocalStorageProvider"
    );
  }

  return context;
}

export function useContextWithLocalStorageDispatch(): Dispatch {
  const context = React.useContext(contextWithLocalStorageDispatchContext);

  if (context === undefined) {
    throw new Error(
      "useContextWithLocalStorageDispatch must be used within a ContextWithLocalStorageProvider"
    );
  }

  return context;
}
