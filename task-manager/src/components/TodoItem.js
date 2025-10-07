import React from "react";

function TodoItem({ task, toggleTask, removeTask }) {
  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTask(task.id)}>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
