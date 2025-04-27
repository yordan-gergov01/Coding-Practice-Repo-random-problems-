const Pool = require("./pool");
const { performance } = require("perf_hooks");

const numThreads = 4;
const pool = new Pool(numThreads);

let result = [];
let tasksDone = 0;
const totalTasks = 200_000;
const start = performance.now();

for (let i = 0; i < totalTasks; i++) {
  pool.submit(
    "generatePrimes",
    {
      count: 2,
      start: 10_000_000_000,
      format: true,
      log: false,
    },
    (primes) => {
      console.log("Primes generated.");
      tasksDone++;
      result = result.concat(primes);

      if (tasksDone === totalTasks) {
        console.log(`Time taken: ${performance.now() - start}ms`);
        console.log(result.sort());
        process.exit(0);
      }
    }
  );
}
