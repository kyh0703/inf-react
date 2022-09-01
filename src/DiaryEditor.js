import "./App.css";

import React, { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const onSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      contentInput.current.focus();
      return;
    }
    alert("저장 성공");
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={onChange}
          ref={authorInput}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={onChange}
          ref={contentInput}
        />
      </div>
      <div>
        <span>오늘의 감정 점수: </span>
        <select name="emotion" value={state.emotion} onChange={onChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={onSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
