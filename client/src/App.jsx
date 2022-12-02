import "./App.scss";
import Home from "./components/home/Home";
import ToolTipOne from "./components/tool-tip-one/ToolTipOne";
import ToolTipFour from "./components/tool-tip-four/ToolTipFour";
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
<<<<<<< HEAD
          <Route path="/6" element={<ToolTipSix />} />
=======
          <Route path="/5" element={<ToolTipFour />} />
>>>>>>> dev
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
