import { ContextWithLocalStorage } from "@Src/pages/ContextWithLocalStorage/components/ContextWithLocalStorage";
import { ContextWithLocalStorageProvider } from "@Src/pages/ContextWithLocalStorage/contexts/ContextWithLocalStorageContext";

export const ContextWithLocalStoragePage: React.FC = () => (
  <ContextWithLocalStorageProvider>
    <ContextWithLocalStorage />
  </ContextWithLocalStorageProvider>
);
