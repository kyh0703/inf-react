import React, { useReducer, useRef } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.id);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.id ? { ...action.data } : action
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: "오늘의 일기1번",
    date: 1662963386786,
  },
  {
    id: 2,
    emotion: 2,
    content: "오늘의 일기2번",
    date: 1662963386787,
  },
  {
    id: 3,
    emotion: 3,
    content: "오늘의 일기3번",
    date: 1662963386788,
  },
  {
    id: 4,
    emotion: 4,
    content: "오늘의 일기4번",
    date: 1662963386789,
  },
  {
    id: 5,
    emotion: 5,
    content: "오늘의 일기5번",
    date: 1662963386790,
  },
];

const App = () => {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  //CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={(onCreate, onRemove, onEdit)}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
