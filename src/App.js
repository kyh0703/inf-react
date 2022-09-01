import { useRef, useState, useMemo, useCallback, useReducer } from "react";
import "./App.css";
import Counter from "./blog/Couter";
import Container from "./blog/Container";
import CreateUser from "./blog/CreateUser";
import InputSample from "./blog/InputSample";
import MultiInput from "./blog/MultiInput";
import UserList from "./blog/UserList";
import Say from "./book/Say";
import EventPractice from "./book/EventPractice";
import ValidationSample from "./book/ValidationSample";
import MyComponent from "./book/MyComponent";
import ScrollBox from "./book/ScrollBox";
import IterationSample from "./book/IterationSample";

const countActiveUsers = (users) => {
  console.log("활성 사용자 수를 세는 중");
  return users.filter((user) => user.active).length;
};

const initialState = {
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatcher] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  return (
    <>
      <CreateUser username={username} email={email} />
      <UserList users={users} />
      <div>할성 사용자 수: 0</div>
    </>
  );
}

export default App;
