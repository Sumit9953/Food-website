import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((e , index) => (
          <div key={index} className="w-60 m-2 h-60 bg-gray-200"></div>
        ))}
    </div>
  );
};

export default Shimmer;
