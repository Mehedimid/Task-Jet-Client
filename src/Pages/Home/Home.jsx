import React from "react";
import Navbar from "../../navbar/Navbar";
import Header from "./header/Header";
import Section2 from "./Section2";

function Home(props) {
  return (
    <div>
      <div className="bg-black bg-opacity-60 fixed w-full">
        <Navbar></Navbar>
      </div>
      <Header></Header>

      <div className="sizing"><Section2></Section2></div>

    </div>
  );
}

export default Home;
