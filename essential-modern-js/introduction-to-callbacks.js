function fn() {
  console.log('Executing fn');
}

fn.property = 'Hello!';

fn.func = function() {
  console.log('Executing func');
}

console.log(fn.property);

fn();
fn.func();

// The point is that functions in JavaScript are like any other data type.
// They can be created at any time, set to a variable, and reassigned.
// It shouldn’t be a surprise then that they can be passed into another function and returned from another function.

function fnGenerator() {
  return function() {
    console.log('Ran the inner function');
  }
}

const fnReturned = fnGenerator();
console.log(fnReturned); // -> [Function (anonymous)]
fnReturned(); // -> Ran the inner function

// We can also pass functions in to other functions.

function fnCaller(fn) {
  fn();
}

function log() {
  console.log('Calling log');
}

fnCaller(log); // -> Calling log

// This gives us the definition of a callback. A callback is a function that is passed in to another function.
