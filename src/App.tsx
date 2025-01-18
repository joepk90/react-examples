import { BrowserRouter, Route, Routes } from "react-router";

import { Home } from "@Pages/Home/Home";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default App;
