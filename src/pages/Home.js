import React, { useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";

const Home = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  console.log(currentDate);

  return (
    <div>
      <MyHeader
        leftChild={<MyButton text={"<"} />}
        rightChild={<MyButton text={">"} />}
      />
    </div>
  );
};

export default Home;
