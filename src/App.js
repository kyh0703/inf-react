import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

// Components
import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader
          headText={"App"}
          leftChild={
            <MyButton text={"뒤로가기"} onClick={() => alert("왼쪽클릭")} />
          }
          rightChild={
            <MyButton text={"삭제하기"} onClick={() => alert("오른쪽클릭")} />
          }
        />
        <h2>App.js</h2>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"positive"}
        ></MyButton>
        <MyButton
          text={"버튼"}
          onClick={() => alert("버튼 클릭")}
          type={"negative"}
        ></MyButton>
        <MyButton text={"버튼"} onClick={() => alert("버튼 클릭")}></MyButton>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/new" element={<New />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
