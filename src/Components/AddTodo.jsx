import React, { useRef } from "react";

function AddTodo({ AddTodoBtn }) {
  const userInputRef = useRef();
  const userDateRef = useRef();

  // Function to handle the add todo button click
  const HandleAddTodoBtn = () => {
    if (userInputRef.current.value === "" || userDateRef.current.value === "") {
      alert("Add Todo and Date First");
    } else {
      let userInputValue = userInputRef.current.value;
      let userDateValue = userDateRef.current.value;

      AddTodoBtn(userInputValue, userDateValue);

      userInputRef.current.value = "";
      userDateRef.current.value = "";
    }
  };

  return (
    <>
      <input
        ref={userInputRef}
        className="rounded-md border border-blue-600 px-2 outline-none"
        type="text"
        id="UserTodoInput"
      />
      <input
        ref={userDateRef}
        className=" rounded-md border border-blue-600 px-2 outline-none"
        type="date"
        id="UserDateInput"
      />
      <button
        onClick={HandleAddTodoBtn}
        className="rounded-md bg-blue-600 px-4 py-1 text-white"
        type="submit"
      >
        Add
      </button>
    </>
  );
}

export default AddTodo;
