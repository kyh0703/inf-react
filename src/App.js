import "./App.css";

import React from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "김연호",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "홍길동",
    content: "하이 2",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "개똥이",
    content: "하이 3",
    emotion: 1,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "아무개",
    content: "하이 4",
    emotion: 2,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "김연호",
    content: "하이 5",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
};

export default App;
