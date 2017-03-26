var Fiber = require('fibers');

var fiber = Fiber(function() {
  console.log("Fiber Start");
  Fiber.yield();
  console.log("Fiber Stop");
}).run();
// 输出: "Fiber Start"
