let input = document.getElementById("task-input");
let addTaskButton = document.getElementById("add-task-button");
let taskList = document.getElementById("task-list");

let tasks = [];

function loadTasks() {
  const savedTasks = localStorage.getItem("tasks");

  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }

  renderTasks();
}

function addTask() {
  if (input.value.trim() !== "") {
    const newTask = {
      id: Date.now(),
      text: input.value,
    };
    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();

    input.value = "";
  }
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const newItem = document.createElement("li");
    newItem.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete task";
    deleteButton.onclick = function () {
      deleteTask(task.id);
    };

    newItem.appendChild(deleteButton);

    taskList.appendChild(newItem);
  });
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  renderTasks();
}

addTaskButton.addEventListener("click", addTask);

loadTasks();
