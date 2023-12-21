import React from "react";
import facebook from "../../assets/facebook.png"

function Facebook(props) {
  return (
    <div
      onClick={() => console.log("clicked facebook icon")}
      className="hover:cursor-pointer">
      <img src={facebook} className="w-8" />
    </div>
  );
}

export default Facebook;
