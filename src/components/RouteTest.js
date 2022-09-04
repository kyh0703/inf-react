import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/edit"}>Edit</Link>
      <br />
      <Link to={"/diary"}>Diary</Link>
    </>
  );
};

export default RouteTest;
