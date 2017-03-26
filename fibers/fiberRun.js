var Fiber = require('fibers');

var fiber = Fiber(function(a) {
  console.log("第一次调用run:");
  console.log("fn参数为：" + a);

  var b = Fiber.yield("yield");

  console.log("第二次调用run:");
  console.log("fn参数为：" + a);

  console.log("yield返回值为：" + b);
  return "return";
});

// 第一次运行run()
var c = fiber.run("One");

// 第二次运行run()
var d = fiber.run("Two");

console.log("调用yield，run返回：" + c);
console.log("fn运行完成，run返回：" + d);

/*
  调用 run()的两种时态，一是Fiber未启动时，一时Fiber被yield时。在这两种时态下， run()的行为并不太一样。
    1)当Fiber未启动时， run()接受一个参数，并把它传递给 fn，作为其参数。
    2)当Fiber处理yielding状态时，
      run()接受一个参数，并把它作为 yield()的返回值，fn并不会从头运行，而是从中断处继续运行。

  第一次调用run:
  fn参数为：One      // a = one

  第二次调用run:
  fn参数为：One     // a = yield

  yield返回值为：Two    // b = two  等于下一个线程传递的参数

  调用yield，run返回：yield   // c = yield

  fn运行完成，run返回：return  // d = return
*/

/*
function fibo(n) {
    return n > 1 ? fibo(n - 1) + fibo(n - 2) : 1;
}
Fiber(function () {
    console.log(fibo(40));
});

1) 当 run()调用的时候，纤程启动，并为 fn分配新的堆栈，fn会在这个新的堆栈上运行，直到 fn有返回值或调用 yield()。
2) fn返回后或调用 yield()后，堆栈重置，当再次调用 run()时，纤程会再次启动， fn运行于首次分配的堆栈中。
 */
