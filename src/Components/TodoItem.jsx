import React from "react";

function TodoItem({ Name, dueDate, deleteBtn }) {
  return (
    <>
      <div>{Name}</div>
      <div>{dueDate}</div>
      <button
        // onClick event handler is set to call the 'deleteBtn' function with the 'Name' parameter
        onClick={() => deleteBtn(Name)}
        className="rounded-md bg-red-600 px-4 py-1 text-white"
      >
        Delete
      </button>
    </>
  );
}

export default TodoItem;
