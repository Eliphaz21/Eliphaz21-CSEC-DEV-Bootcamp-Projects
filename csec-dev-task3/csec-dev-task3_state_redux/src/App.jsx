import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Stats from "./components/Stats";
import TaskList from "./components/TaskList";
import "./index.css"
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Welcome to your to-do list!", completed: false },
    { id: 2, text: "Click the checkbox to mark as complete", completed: false },
    { id: 3, text: "Hover to delete items", completed: false }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id) => {
    const newText = prompt("Edit task:");
    if (!newText) return;

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />

      <TaskInput addTask={addTask} />

      <Stats tasks={tasks} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;