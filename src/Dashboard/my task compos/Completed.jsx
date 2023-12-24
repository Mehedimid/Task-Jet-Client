import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useTodos from "../../hooks/useTodos";
import Loading from "../../shared components/Loading";
import CompleteCard from "./CompleteCard";
import Swal from "sweetalert2";

function Completed(props) {
  const { todos, isPending, refetch } = useTodos();
  const axiosPublic = useAxiosPublic();

  if (isPending) {
    return <Loading></Loading>;
  }

   // delete a task >>>
   const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`tasks/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your Todo has been deleted.",
            icon: "success",
          });
          refetch()
        }
      }
    });
  };


  return (
    <>
      <div className="lg:border-r-2 border-black">
        <p className="text-center font-semibold text-xl my-5 border-b border-gray-600 lg:mx-2">
          Completed Tasks
        </p>

        <div>
          {todos?.map((task) => {
            if (task?.status == "Completed") {
              return (
                <CompleteCard key={task?.id} task={task} handleDelete={handleDelete} />
   
              );
            }
          })}
        </div>

      </div>
    </>
  );
}

export default Completed;
