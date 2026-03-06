import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;