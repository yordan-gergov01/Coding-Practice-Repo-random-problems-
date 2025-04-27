const { Worker } = require("worker_threads");

class Pool {
  constructor(threadCount) {
    // number of threads that will be spawned
    this.threadCount = threadCount;

    // all of our worker threads (same length as threadCount)
    this.threads = [];

    // threads that are not currently working
    this.idleThreads = [];

    // this will be our queue with tasks that need to be executed
    // these are not currently running in one of the threads
    this.scheduledTasks = [];

    // Spawned the threads
    for (let i = 0; i < threadCount; i++) {
      this.spawnThread();
    }
  }

  spawnThread() {
    const worker = new Worker("./calc.js");

    // when we get a message from a worker, it means that it has finished its task
    worker.on("message", (result) => {
      const { callback } = worker.currentTask;

      if (callback) {
        callback(result);
      }

      this.idleThreads.push(worker);
      this.runNextTask();
    });

    this.threads.push(worker);

    // initially all threads are idle
    this.idleThreads.push(worker);
  }

  runNextTask() {
    if (this.scheduledTasks.length > 0 && this.idleThreads.length > 0) {
      const worker = this.idleThreads.shift();
      const { taskName, options, callback } = this.scheduledTasks.shift();

      worker.currentTask = { taskName, options, callback };

      // tell a worker to start executing that task
      worker.postMessage({ taskName, options });
    }
  }

  submit(taskName, options, callback) {
    this.scheduledTasks.push({ taskName, options, callback });
    this.runNextTask();
  }
}

module.exports = Pool;
