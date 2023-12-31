import React from "react";
import task from "../../assets/task.png"
import { Link } from "react-router-dom";

function Section2(props) {
  return (
    <div className=" mx-auto my-10">
      <div className="flex flex-col-reverse md:flex-row bg-[#D5FFD] items-center justify-center gap-8">
        {/* image  */}
        <img src={task} className="md:w-1/2" />
        

        {/* content  */}
        <div className="md:w-1/2 text-center md:text-start">
            <h1 className="text-3xl md:text-5xl title-font text-[#0C356A]">Who Can Manage Task?</h1>
            <p className=" mt-2 mb-4">
            {" "}
            TaskJET is designed exclusively for students to enhance
            productivity, reduce stress, and make your academic journey
            smoother. Get started today and experience the power of efficient
            task management!
          </p>
          <ul className="font-semibold text-lg">
            <li>1. Student of School , College or University</li>
            <li>1. Any People For Daily Routine</li>
            <li>1. Anybody Can make immediate task</li>
          </ul>

          <div className="my-3">
            <Link to='/dashboard' className="home-btn common-btn border-2 border-gray-600">Start Task</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
