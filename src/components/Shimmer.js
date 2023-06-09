import React from "react";

const Shimmer = () => {
  return (
    <div className="resturnat-lists">
      {Array(20)
        .fill("")
        .map((e , index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
    </div>
  );
};

export default Shimmer;
