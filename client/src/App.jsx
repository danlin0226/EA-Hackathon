import "./App.scss";
import Home from "./components/home/Home";
import ToolTipOne from "./components/tool-tip-one/ToolTipOne";
import "./main.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/2" element={<ToolTipOne />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
