import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AddTask(props) {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const email = user?.email;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const date = new Date(data.deadline).toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const obj = {
      title: data.title,
      description: data.description,
      priority: data.priority,
      deadline: date,
      email: email,
    };

    axiosPublic.post(`/tasks`, obj).then((res) => {
      console.log(res.data);
      reset();
      Swal.fire("Task Added in Todo List!");
      navigate(`/dashboard/${email}/my-task`);
    });
  };

  return (
    <div className=" mx-auto min-h-screen flex justify-center items-center">
      <div className="min-h-[80vh my-10 mx-2">
        <div className=" mx-auto bg-[#40F8FF] px-5 py-5">
          {/* form start here  */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Title input */}
            <div className="mb-4">
              <label htmlFor="title" className="block text-black">
                Title
              </label>
              <input
                {...register("title", {
                  required: "Title is required",
                  maxLength: {
                    value: 8,
                    message: "Title should not exceed 8 characters",
                  },
                })}
                type="text"
                id="title"
                placeholder="Ex: Task 1"
                className="input input-bordered  w-full "
              />
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>

            {/* Description input */}
            <div className="mb-4">
              <label htmlFor="description" className="block text-black">
                Description
              </label>
              <input
                {...register("description", {
                  required: "Title is required",
                  maxLength: {
                    value: 30,
                    message: "Description should not exceed 30 characters",
                  },
                })}
                id="description"
                placeholder="Ex: Finish math home works"
                className="input input-bordered w-full "
              />
              {errors.title && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>

            {/* Priority input */}
            <div className="mb-4">
              <label htmlFor="priority" className="block text-black">
                Priority
              </label>
              <select
                {...register("priority")}
                id="priority"
                className="input input-bordered  w-full ">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            {/* Deadline input */}
            <div className="mb-4">
              <label htmlFor="deadline" className="block text-black">
                Deadline
              </label>
              <input
                {...register("deadline")}
                type="date"
                id="deadline"
                className="input input-bordered  w-full "
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn-common hvr-bounce-to-top">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;

// const taskCollection = client.db("taskJETDB").collection("tasks");

// // task api >>>
// app.post(`/tasks/:email`, async (req, res) => {
//     try{
//         const task = req.body;
//         console.log(task)
//         const result = await taskCollection.insertOne(task);
//         res.send(result)
//     }
//     catch (err) {console.log(err)}
// })
