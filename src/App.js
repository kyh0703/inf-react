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
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: [...state.user, action.user],
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        ),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatcher] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatcher({
      type: "CHANGE_INPUT",
      name,
      value,
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatcher({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id) => {
    dispatcher({
      type: "TOGGLE_USER",
      id,
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatcher({
      type: "REMOVE_USER",
      id,
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>할성 사용자 수: {count}</div>
    </>
  );
}

export default App;
