const { workerData, parentPort } = require("worker_threads");

function fact(number) {
  if (number === 0 || number === 1) {
    return 1;
  }

  return number * fact(number - 1);
}

const numberFactorial = fact(Number(workerData));

parentPort.postMessage(numberFactorial);
