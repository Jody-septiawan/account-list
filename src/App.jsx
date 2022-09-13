import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AccountDetail from "./pages/AccountDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:id" element={<AccountDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
