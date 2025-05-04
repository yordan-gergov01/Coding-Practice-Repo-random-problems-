const fs = require("fs");
const path = require("path");

const command = process.argv[2];
const taskTitle = process.argv[3];
const filePath = path.join(__dirname, "tasks.json");

if (command === "add") {
  let tasks = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    tasks = JSON.parse(data);
  } else {
    console.log("File does not exist.");
    process.exit(1);
  }

  if (!taskTitle) {
    console.log("Please provide a task title.");
    process.exit(1);
  }

  const newTask = {
    title: taskTitle,
    completed: false,
  };

  tasks.push(newTask);

  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), "utf-8");
  console.log(`Task added: ${taskTitle}`);
} else if (command === "list") {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    const availableTasks = JSON.parse(data);

    availableTasks.forEach((task, index) => {
      const isCompleted = task.completed === false ? "[X]" : "[✓]";
      console.log(`${index + 1}. ${isCompleted} ${task.title}`);
    });
  } else {
    console.log("File does not exist");
    process.exit(1);
  }
} else if (command === "complete") {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, "utf-8");
    const availableTasks = JSON.parse(data);
    const indexToComplete = Number(process.argv[3]) - 1;

    if (
      isNaN(indexToComplete) ||
      indexToComplete < 0 ||
      indexToComplete >= availableTasks.length
    ) {
      console.log("Invalid task number.");
      process.exit(1);
    }

    availableTasks[indexToComplete].completed = true;

    fs.writeFileSync(
      filePath,
      JSON.stringify(availableTasks, null, 2),
      "utf-8"
    );

    console.log(
      `Task marked as completed: ${availableTasks[indexToComplete].title}`
    );
  } else {
    console.log("File does not exist.");
    process.exit(1);
  }
} else {
  console.log("Unknown command. Use: node task.js add <your task name>");
}
