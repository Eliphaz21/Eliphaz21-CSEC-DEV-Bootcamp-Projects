function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  return (
    <li className="task-item">
      <div className="task-left">
        <div
          className="custom-checkbox"
          onClick={() => toggleTask(task.id)}
          style={{
            backgroundColor: task.completed ? "#16a34a" : "#475569"
          }}
        ></div>

        <span
          className="task-text"
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            opacity: task.completed ? 0.6 : 1
          }}
        >
          {task.text}
        </span>
      </div>

      <div className="task-actions show-actions">
        <button className="btn-edit" onClick={() => editTask(task.id)}>
          ✎
        </button>

        <button className="btn-delete" onClick={() => deleteTask(task.id)}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default TaskItem;