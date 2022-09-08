import React, { useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);

  const headText = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월`;

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text={"<"} />}
        headText={headText}
        rightChild={<MyButton text={">"} />}
      />
    </div>
  );
};

export default Home;
