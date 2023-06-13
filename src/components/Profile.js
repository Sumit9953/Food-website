import React from "react";
import { useState } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <div>
      <h1>Profile component</h1>
      <h2>Count: {count}</h2>
      <h2>Count: {count2}</h2>
      <button
        onClick={() => {
          setCount(1);
          setCount2(1);
        }}
      >setCount</button>
    </div>
  );
};

export default Profile;
