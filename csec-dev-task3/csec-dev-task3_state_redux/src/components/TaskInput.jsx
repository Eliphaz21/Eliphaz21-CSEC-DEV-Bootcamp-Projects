import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

function TaskInput() {

  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text) return;

    dispatch(addTask(text));
    setText("");
  };

  return (
    <div>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>

    </div>
  );
}

export default TaskInput;