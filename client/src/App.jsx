import "./App.scss";
import Home from "./components/home/Home";
import ToolTipOne from "./components/tool-tip-one/ToolTipOne";
import ToolTipTwo from "./components/tool-tip-two/ToolTipTwo";
import ToolTipThree from "./components/tool-tip-three/ToolTipThree";
import WelcomeModal from "./components/welcome-modal/WelcomeModal";
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
          <Route path="/1" element={<WelcomeModal />} />
          <Route path="/2" element={<ToolTipOne />} />

          <Route path="/3" element={<ToolTipTwo />} />
          <Route path="/4" element={<ToolTipThree />} />

          <Route path="/6" element={<ToolTipSix />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
