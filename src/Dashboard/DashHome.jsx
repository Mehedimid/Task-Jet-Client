import React from "react";
import task from "../assets/task.png";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function DashHome(props) {
  const { user } = useAuth();

  return (

      <div className="w-full mx-auto my-10">
        <div className="flex flex-col md:flex-row bg-[#D5FFD] items-center justify-center gap-8">
          {/* image  */}
          <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ezo-thM7hpWVl4MAyEea8A.png" className="md:w-1/2" />

          {/* content  */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl title-font text-[#0C356A]">
              Welcome to TaskJET - Your Student Task Management App!
            </h1>
            <p className="mt-4">
              Stay organized, manage your tasks, and excel in your studies with
              TaskJET. Effortlessly plan your day, keep track of assignments,
              and achieve your academic goals.
            </p>
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
              <Link
                to={`/dashboard/${user?.email}/add-task`}
                className="btn-common hvr-bounce-to-top border border-gray-700">
                Add Task
              </Link>
            </div>
          </div>
        </div>
      </div>

  );
}

export default DashHome;
