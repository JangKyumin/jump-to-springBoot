import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardPage from "./components/BoardPage";
import BoardDetailPage from "./components/BoardDetailPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<BoardPage />} />
          <Route exact path="/detail" element={<BoardDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
