import React, { useRef, useState } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const passwordRef = useRef();
  const [value, setValue] = useState({
    password: "",
    clicked: false,
    validated: false,
  });
  const onChange = (event) => {
    setValue({
      ...value,
      password: event.target.value,
    });
  };
  const onClick = () => {
    setValue({
      ...value,
      clicked: true,
      validated: value.password === "0000",
    });
    passwordRef.current.focus();
  };
  return (
    <div>
      <input
        type="password"
        value={value.password}
        onChange={onChange}
        ref={passwordRef}
        className={
          value.clicked ? (value.validated ? "success" : "failure") : ""
        }
      />
      <button onClick={onClick}>검증하기</button>
    </div>
  );
};

export default ValidationSample;
