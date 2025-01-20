import { useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Clean my bedroom", status: "Completed", color: "success" },
    { id: 2, name: "Buy groceries", status: "Pending", color: "warning" },
    { id: 3, name: "Study React.js", status: "In Progress", color: "info" },
    { id: 4, name: "Call mom", status: "Completed", color: "success" },
  ]);

  const handleEditClick = (task) => {
    return task;
  };

  const handleDeleteClick = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleSaveChanges = (updatedTask) => {
    if (updatedTask.id) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        )
      );
    } else {
      const newTask = { ...updatedTask, id: tasks.length + 1 };
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return { tasks, handleEditClick, handleDeleteClick, handleSaveChanges, handleAddTask };
};
