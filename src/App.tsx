import { CONTEXT_WITH_LOCAL_STORAGE } from "@Src/routes";
import { BrowserRouter, Route, Routes } from "react-router";

import { PageLayout } from "@Components/PageLayout/PageLayout";
import { ContextWithLocalStoragePage } from "@Pages/ContextWithLocalStorage/ContextWithLocalStoragePage";
import { Home } from "@Pages/Home/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route element={<PageLayout />}>
        <Route
          path={CONTEXT_WITH_LOCAL_STORAGE}
          element={<ContextWithLocalStoragePage />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
