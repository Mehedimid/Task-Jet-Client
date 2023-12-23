import React from "react";
import useAuth from "../../hooks/useAuth";
import Loading from "../../shared components/Loading";
import useTodos from "../../hooks/useTodos";
import { CiEdit } from "react-icons/ci";

function Todo(props) {
  const { user } = useAuth();
  const { todos, isPending } = useTodos();

  if (isPending) {
    return <Loading></Loading>;
  }

  const handleUpdate = id => {
     console.log(id)
  }


  return (
    <>
      <div className="lg:border-r-2 border-black">
        <p className="text-center font-semibold text-xl my-5 border-b border-gray-600 lg:mx-2">
          To Do List{" "}
        </p>

        <div>
          {todos?.map((task) => {
            if (task?.status!=="on going" || task?.status!=="completed") {
              return (
                <div key={task?.id}>
                  <div className="bg-[#D5FFD0] w-full border-2 shadow-xl mb-5">
                    <h3 className="bg-[#0C356A] text-white text-center text-xl font-semibold py-3 ">
                      Deadline : <span>{task?.deadline}</span>
                    </h3>
                    <div className="flex justify-center gap-7 my-2 mx-2 items-center">
                      <p className="text-[#0C356A] font-bold text-lg">
                        {task?.title}{" "}
                      </p>
                      <div className="badge badge-neutral">
                        {task?.priority}
                      </div>
                    </div>
                    <p className="text-center font-bold">{task?.description}</p>
                    <div className="flex justify-center items-center my-2 gap-5">
                      <button className="hvr-bounce-to-top border-[#0C356A] border px-2 py1 bg-white shadow-xl rounded">
                        On Going{" "}
                      </button>
                      <CiEdit className="text-xl" onClick={()=>handleUpdate(task?._id)} />
                      {/* <button className="hvr-bounce-to-top border-[#0C356A] border px-2 py1 bg-white shadow-xl rounded">
                        Completed
                      </button> */}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
