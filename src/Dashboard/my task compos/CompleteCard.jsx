import React from 'react';
import { MdDelete } from 'react-icons/md';

function CompleteCard({ task, handleDelete}) {
    const { title, description, priority, deadline } = task;

    return (
      <div className="bg-[#D5FFD0] w-full border-2 shadow-xl mb-5 md:px-2">
        <h3 className="bg-[#0C356A] text-white text-center text-xl font-semibold py-3 ">
          Deadline : <span>{deadline}</span>
        </h3>
        <div className="flex justify-center gap-7 my-2 mx-2 items-center">
          <p className="text-[#0C356A] font-bold text-lg">{title} </p>
          <div className="badge bg-[#40F8FF] font-semibold">{priority}</div>
        </div>
        <p className="text-center text-lg font-bold">{description}</p>
        <div className="flex justify-center items-center my-2 gap-5">
          {/* delete button here  */}
          <button>
            <MdDelete
              className="text-2xl text-red-500 font-bold"
              onClick={() => handleDelete(task?._id)}
            />
          </button>
        </div>
      </div>
    );
}

export default CompleteCard;