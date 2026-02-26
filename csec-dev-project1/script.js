document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('input[type="text"]');
  const addButton = document.querySelector(".btn-add");
  const taskList = document.querySelector(".task-list");
  const statNumbers = document.querySelectorAll(".stats-container .stat-number");

  if (!input || !addButton || !taskList || statNumbers.length < 3) {
    return;
  }

  const ACTIVE_INDEX = 0;
  const COMPLETED_INDEX = 1;
  const TOTAL_INDEX = 2;

  function isTaskCompleted(taskItem) {
    return taskItem.classList.contains("task-completed");
  }

  function updateStats() {
    const items = Array.from(taskList.querySelectorAll(".task-item"));
    const total = items.length;
    const completed = items.filter(isTaskCompleted).length;
    const active = total - completed;

    statNumbers[ACTIVE_INDEX].textContent = String(active);
    statNumbers[COMPLETED_INDEX].textContent = String(completed);
    statNumbers[TOTAL_INDEX].textContent = String(total);
  }

  function toggleTaskCompletion(taskItem) {
    const textEl = taskItem.querySelector(".task-text");
    const checkbox = taskItem.querySelector(".custom-checkbox");

    taskItem.classList.toggle("task-completed");

    if (textEl) {
      const completed = isTaskCompleted(taskItem);
      textEl.style.textDecoration = completed ? "line-through" : "none";
      textEl.style.opacity = completed ? "0.6" : "1";
    }

    if (checkbox) {
      checkbox.style.backgroundColor = isTaskCompleted(taskItem)
        ? "#16a34a"
        : "#475569";
    }

    updateStats();
  }

  function deleteTask(taskItem) {
    taskItem.remove();
    updateStats();
  }

  function editTask(taskItem) {
    const textEl = taskItem.querySelector(".task-text");
    if (!textEl) return;

    const currentText = textEl.textContent || "";
    const newText = window.prompt("Edit task:", currentText.trim());
    if (newText !== null) {
      const trimmed = newText.trim();
      if (trimmed.length > 0) {
        textEl.textContent = trimmed;
      }
    }
  }

  function createTaskElement(text) {
    const li = document.createElement("li");
    li.className = "task-item";

    const left = document.createElement("div");
    left.className = "task-left";

    const checkbox = document.createElement("div");
    checkbox.className = "custom-checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = text;

    left.appendChild(checkbox);
    left.appendChild(span);

    const actions = document.createElement("div");
    actions.className = "task-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "btn-edit";
    editBtn.textContent = "✎";

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "🗑";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(left);
    li.appendChild(actions);

    attachTaskEventHandlers(li);

    return li;
  }

  function attachTaskEventHandlers(taskItem) {
    const checkbox = taskItem.querySelector(".custom-checkbox");
    const deleteBtn = taskItem.querySelector(".btn-delete");
    const editBtn = taskItem.querySelector(".btn-edit");

    if (checkbox) {
      checkbox.addEventListener("click", () => toggleTaskCompletion(taskItem));
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => deleteTask(taskItem));
    }

    if (editBtn) {
      editBtn.addEventListener("click", () => editTask(taskItem));
    }
  }

  function handleAddTask() {
    const value = input.value.trim();
    if (!value) return;

    const newTask = createTaskElement(value);
    taskList.appendChild(newTask);
    input.value = "";
    updateStats();
  }

  Array.from(taskList.querySelectorAll(".task-item")).forEach((taskItem) => {
    attachTaskEventHandlers(taskItem);
  });

  updateStats();

  addButton.addEventListener("click", handleAddTask);

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  });
});
