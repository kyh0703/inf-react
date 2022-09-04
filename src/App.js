import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import RouteTest from "./components/RouteTest";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        <RouteTest>지름길</RouteTest>
      </div>
    </BrowserRouter>
  );
};

export default App;
