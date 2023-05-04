// old way

function oldWay(param) {
  if (param === undefined) {
      param = "Default value";
  }

  console.log(param);
}

oldWay('String passed in'); // -> String passed in
oldWay(); // -> Default value

// The new way for default parameters

function newWay(param = "Default value") {
  console.log(param);
}

newWay('String passed in'); // -> String passed in
newWay(); // -> Default value

// Expressions as Parameters

function fn(param = 10 * 10) {
  console.log(param);
  return param;
}

function fn2(param = fn(50)) {
  console.log(param);
}

fn('String passed in'); // -> String passed in
fn(); // -> 100

fn2(); // -> 50
     // -> 50


// Variable availability
function add(param1 = 10, param2 = param1) {
  console.log(param1 + param2);
}

add(2, 5); // -> 7
add(2); // -> 4
add(); // -> 20
