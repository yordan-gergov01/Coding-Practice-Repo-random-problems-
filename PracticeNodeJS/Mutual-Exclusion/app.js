const { Worker } = require("worker_threads");

const number = new Uint32Array(new SharedArrayBuffer(4)); // 32-bit number
const seal = new SharedArrayBuffer(4);

const THREADS = 20;
let completed = 0;

for (let i = 0; i < THREADS; i++) {
  const worker = new Worker("./calc.js", {
    workerData: { number: number.buffer, seal },
  });

  worker.on("exit", () => {
    completed++;

    if (completed === THREADS) {
      console.log("Final number is: ", number[0]);
    }
  });
}
