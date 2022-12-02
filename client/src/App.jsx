import "./App.scss";
import Home from "./components/home/Home";
import ToolTipOne from "./components/tool-tip-one/ToolTipOne";
import "./main.scss";
import ToolTipSix from "./components/tool-tip-six/ToolTipSix";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/2" element={<ToolTipOne />} />
          <Route path="/6" element={<ToolTipSix />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
