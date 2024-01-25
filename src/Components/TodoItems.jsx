import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ userData, deleteBtn }) {
  return (
    /* Mapping over each item in the 'userData' array to render TodoItem components*/
    <>
      {userData.map((item) => (
        <TodoItem
          // Each TodoItem component needs a unique key, using Math.random() (not recommended in production)
          key={Math.random()}
          Name={item.Name}
          dueDate={item.dueDate}
          // Passing 'deleteBtn' function as a prop to handle delete button click
          deleteBtn={deleteBtn}
        />
      ))}
    </>
  );
}

export default TodoItems;
