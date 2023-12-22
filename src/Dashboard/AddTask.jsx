import React from "react";
import { useForm } from "react-hook-form";

function AddTask(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log("Priority value:", data.priorityValue);
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
                })}
                type="text"
                id="title"
                placeholder="Enter task title"
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
              <textarea
                {...register("description")}
                id="description"
                placeholder="Enter task description"
                className="input input-bordered  w-full "
              />
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
