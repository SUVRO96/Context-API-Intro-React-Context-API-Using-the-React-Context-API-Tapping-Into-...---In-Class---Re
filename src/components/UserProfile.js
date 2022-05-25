import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const temp = useContext(UserContext);
  return (
    <>
      <h1 id="name">{temp.name}</h1>
      <h1 id="age">{temp.age}</h1>
    </>
  );
};

export { UserProfile };
