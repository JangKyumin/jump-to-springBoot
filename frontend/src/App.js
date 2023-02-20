import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BoardPage from "./components/BoardPage";
import BoardDetailPage from "./components/BoardDetailPage";
import BoardCreateForm from "./components/BoardCreateForm";
import NavBarComponent from "./components/NavBarComponent";

function App() {
  return (
    <Router>
      <div>
        <NavBarComponent />
        <Routes>
          <Route exact path="/" element={<BoardPage />} />
          <Route exact path="/detail" element={<BoardDetailPage />} />
          <Route exact path="/create" element={<BoardCreateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
