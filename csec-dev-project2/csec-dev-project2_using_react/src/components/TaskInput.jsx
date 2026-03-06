import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text);
    setText("");
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn-add" onClick={handleAdd}>
        + Add
      </button>
    </div>
  );
}

export default TaskInput;