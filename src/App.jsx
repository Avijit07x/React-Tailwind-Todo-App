import React, { useState, useEffect } from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItems from "./Components/TodoItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let [userData, setUserData] = useState([]);

  // Load data from local storage on component mount
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("userData"));
    if (storedData) {
      setUserData(storedData);
    }
  }, []);

  // Function to add a new todo item
  const AddTodoBtn = (userInput, userDate) => {
    const newItem = { Name: userInput, dueDate: userDate };
    setUserData((current) => [...current, newItem]);

    // Save updated data in local storage
    localStorage.setItem("userData", JSON.stringify([...userData, newItem]));
  };

  // Function to delete a todo item
  const deleteBtn = (deleteItem) => {
    const filterUserData = userData.filter((item) => item.Name !== deleteItem);
    setUserData(filterUserData);

    // Save updated data in local storage after deletion
    localStorage.setItem("userData", JSON.stringify(filterUserData));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3">
        <AppName />
        <div className="grid grid-cols-3 gap-4">
          <AddTodo AddTodoBtn={AddTodoBtn} />
          <TodoItems userData={userData} deleteBtn={deleteBtn} />
        </div>
        {/* Display an error message if 'userData' array is empty */}
        {userData.length === 0 && <ErrorMessage />}
      </div>
    </>
  );
}

export default App;
