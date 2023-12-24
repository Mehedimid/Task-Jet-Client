import React from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useTodos from "../../hooks/useTodos";
import Loading from "../../shared components/Loading";
import OnGoingCard from "./OnGoingCard";
import Swal from "sweetalert2";

function OnGoing(props) {
  const { todos, isPending, refetch } = useTodos();
  const axiosPublic = useAxiosPublic();

  if (isPending) {
    return <Loading></Loading>;
  }

  const handleCompleted= async (id) => {
    const res = await axiosPublic.patch(`/tasks/completed/${id}`)
    console.log(res.data)
    if(res.data.modifiedCount>0){
      refetch()
      Swal.fire({
        title: "Completed!",
        text: "This Task is Completed.",
        icon: "success",
      });
    }
  };

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

  const handleUpdate = id => {
    console.log(id)
  }


  return (
    <>
      <div className="lg:border-r-2 border-black">
        <p className="text-center font-semibold text-xl my-5 border-b border-gray-600 lg:mx-2">
          On Going Tasks
        </p>

        <div>
          {todos?.map((task) => {
            if (task?.status == "On Going") {
              return (
                <OnGoingCard key={task?.id} task={task} handleDelete={handleDelete} handleCompleted={handleCompleted} handleUpdate={handleUpdate}>
                </OnGoingCard>
              );
            }
          })}
        </div>

      </div>
    </>
  );
}

export default OnGoing;
