import React, { useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState({
    username: "",
    message: "",
  });
  const onChange = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value,
    });
  };
  const onReset = () => {
    setMessage({
      username: "",
      message: "",
    });
  };
  const onEnter = (event) => {
    if (event.key === "Enter") {
      onReset();
    }
  };
  return (
    <div>
      <h1>이벤트연습</h1>
      <input
        type="text"
        name="username"
        onChange={onChange}
        value={message.username}
      />
      <input
        type="text"
        name="message"
        value={message.message}
        onChange={onChange}
        onKeyPress={onEnter}
      />
      <button onClick={onReset}>리셋</button>
    </div>
  );
};

export default EventPractice;
