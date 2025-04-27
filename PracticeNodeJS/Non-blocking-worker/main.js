const readline = require("readline/promises");
const { Worker } = require("worker_threads");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (number) => {
  const worker = new Worker("./worker.js", { workerData: number });
  const threadId = worker.threadId;

  worker.on("message", (result) => {
    console.log(result);
  });

  worker.on("error", (error) => {
    console.log(error);
  });

  worker.on("exit", (code) => {
    console.log(`Worker ${threadId} exited.`);

    if (code !== 0) {
      console.error(`Worker ${threadId} exited with code ${code}`);
    }
  });
});
