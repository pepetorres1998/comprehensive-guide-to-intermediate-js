console.log(x);
var x = 10;
console.log(x);

// No more unexpected behavior or buggy code due to variable hoisting.
// Thanks to let.

// console.log(y);
let y = 10;
console.log(y);

// let is block-scoped. Any pair of arbitrary curly brackets {} creates
// a new scope and variables declared with let are available only in those curly
// brackets.

{
  var a = 1111;
  let b = 2222;

  console.log(a);
  console.log(b);
}

console.log(a);
// console.log(b);

// This also applies for loops. Also for variables declared in conditinos of a loop.

for (var i = 0; i < 10; i++) {
}

for (let j = 0; j < 10; j++) {
}

console.log(i); // -> 10
// console.log(j); // -> Uncaught ReferenceError: j is not defined

// Duplicate declaration also fails with let, unlike with var.

var xx = 4;
var xx = 5;

let yy = 6;
// let yy = 7; // Identifier yy has already been declared

// const c; // -> Uncaught SyntaxError: Missing initializer in const declaration

const c = 3333;
c = 4444; // TypeError: Assignment on constant variable.
