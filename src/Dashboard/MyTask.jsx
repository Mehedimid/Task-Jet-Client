import React from "react";
import OnGoing from "./my task compos/OnGoing";
import Completed from "./my task compos/Completed";
import Todo from "./my task compos/Todo";

function MyTask(props) {
  return (
    <>
    <div className="min-h-[80vh] w-full mx-auto grid grid-cols-1 lg:grid-cols-3">

     <Todo></Todo>
     <OnGoing></OnGoing>
     <Completed></Completed>
    
    </div>
    </>
  );
}

export default MyTask;
