import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../features/tasks/taskSlice";

function TaskItem({ task }) {

  const dispatch = useDispatch();

  return (
    <li>

      <span
        onClick={() => dispatch(toggleTask(task.id))}
      >
        {task.text}
      </span>

      <button
        onClick={() => dispatch(deleteTask(task.id))}
      >
        Delete
      </button>

    </li>
  );
}

export default TaskItem;