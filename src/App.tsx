import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import View from "./pages/view";
import Error from "./pages/error";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
