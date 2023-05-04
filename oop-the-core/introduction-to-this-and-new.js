// function fn() {
//   console.log(this);
// }

// fn(); // -> Window {frames: Window, postMessage: ƒ, …}

// const obj = {
//   str: 'Hello!',
//   fn: function() {
//       console.log(this);
//   }
// };

// obj.fn(); // -> { str: 'Hello!', fn: [Function: fn] }

const obj = {
  counter: 0,
  incrementCounter: function() {
      this.counter++;
      this.logCounter();
  },
  logCounter: function() {
      console.log(this.counter);
  }
};

obj.incrementCounter(); // -> 1
obj.incrementCounter(); // -> 2
obj.incrementCounter(); // -> 3

function fn() {
  return 'hi';
}

console.log(hi);
console.log(fn()); // -> undefined
console.log(new fn()); // -> fn {}
console.log(new fn() === new fn()); // -> false
