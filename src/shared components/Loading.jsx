import React from "react";

function Loading(props) {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <p className="">
        <span className="loading loading-spinner text-info w-32"></span>
      </p>
    </div>
  );
}

export default Loading;
