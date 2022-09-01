import React, { useState } from "react";

function InputSample() {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onInit = () => {
    setValue("");
  };
  return (
    <div>
      <input onChange={onChange} value={value} />
      <button onClick={onInit}>초기화</button>
      <div>
        <b>값: {value}</b>
      </div>
    </div>
  );
}

export default InputSample;
