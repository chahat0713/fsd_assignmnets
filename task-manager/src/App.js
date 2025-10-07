import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
}

export default App;
