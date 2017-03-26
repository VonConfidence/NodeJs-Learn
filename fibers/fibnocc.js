var Fiber = require('fibers');

function fibo(n) {
  return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
Fiber(function() {
  console.log(fibo(40));
}).run();
