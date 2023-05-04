// As JavaScript reads the assignment below, the JS engine declares it in the beginning of the scope,
// as we are in the global scope it declares it in the beginning of the file.
// var y;
console.log(x);
var x = 5;
console.log(x);
console.log(y);

// JavaScript reads the code and if it sees a variable assignment it declares the variable in the beginning of the scope.
var y = 10;

// Hoisting is only for current scope
function fn() {
  console.log('The value of z: ', z);
  var z = 20;
};

fn();

// console.log(z);

// BAD PRACTICE
// Don't write code like this

fx = 18;
var fy = 20;
var fx;
console.log(fx);

gx = 17;
gy = 20;
var gx;
var gy;
console.log('the value of gx: ', gx);

// It doesn't print an error, but it appears as magical code, as the JS engine will be hoisting and declaring the
// variable on top of the scope code.

var hx = 17;
var hy = 20;
console.log(hy)


var hx;
var hy;
hx = 177;
hy = 200;
console.log(hx)

// This is way better, and considered better practice.

// Function hoisting

// The function expression acts like a variable hoisting, it gets declared at the top and returns undefined until
// its assignation.

var fnExpression = function() {
  var c = 180;
  var d = 'def';
};

// Function declaration, on the other hand, gets hoisted in its entirety. The variable gets moved to the top and immediately
// is equal to the function. It even gets hoisted higher than normal variable initializations.

function fnDeclaration() {
  var e = 789;
};
