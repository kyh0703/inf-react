import React, { useRef } from "react";

const style = {
  border: "1px solid black",
  height: "300px",
  width: "300px",
  overflow: "auto",
  position: "relative",
};

const innerStyle = {
  width: "100%",
  height: "650px",
  background: "linear-gradient(white, black)",
};

const ScrollBox = () => {
  const scrollRef = useRef();
  return (
    <div style={style} ref={scrollRef}>
      <div style={innerStyle} />
    </div>
  );
};

export default ScrollBox;
