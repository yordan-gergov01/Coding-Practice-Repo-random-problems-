const { Worker } = require("worker_threads");
const { Buffer } = require("buffer");

const data = Buffer.from(new SharedArrayBuffer(8));
const THREADS = 2;

console.log("Original data: ", data);

for (let i = 0; i < THREADS; i++) {
  new Worker("./calc.js", { workerData: { data: data.buffer } });
}

setTimeout(() => {
  console.log("Data in main after 1 second: ", data);
}, 1000);
