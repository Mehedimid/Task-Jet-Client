import React from "react";
import Navbar from "../../navbar/Navbar";
import Header from "./header/Header";

function Home(props) {
  return (
    <div>
      <div className="bg-black bg-opacity-60 fixed w-full">
        <Navbar></Navbar>
      </div>
      <Header></Header>
    </div>
  );
}

export default Home;
