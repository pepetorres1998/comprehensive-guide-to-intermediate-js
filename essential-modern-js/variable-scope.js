var x = 5;
var y = 10;

function fn() {
  var insideFnScope = true;
  console.log(insideFnScope);
  console.log(x);
};

function fnTwo() {
  x = 10;
  var y = 20;
  console.log(x);
  console.log(y);
};

//fn();
fnTwo();

console.log(x);
console.log(y);

// console.log(insideFnScope);
