const {parentPort, workerData} = require("worker_threads");

//1
// parentPort.postMessage(getFib(workerData.num));

//2
parentPort.on("message", data => {
  parentPort.postMessage({num: data.num, fib: getFib(data.num)});
  console.log(workerData.module);
});

function getFib(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  } else {
    return getFib(num - 1) + getFib(num - 2);
  }
}