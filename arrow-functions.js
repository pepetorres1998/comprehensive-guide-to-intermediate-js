// No Return Needed

const standardFnAdd = function(num1, num2) {
  return num1 + num2;
}

const arrowFnAdd = (num1, num2) => num1 + num2;

console.log(standardFnAdd(2, 5)); // -> 7
console.log(arrowFnAdd(2, 5)); // -> 7

// When returning an object

function createObject(prop) {
  return { prop: prop };
}

const arrowCreateObject = (prop) => ({ prop });

// No Parentheses Needed

const add10 = function(num1) {
  return num1 + 10;
}

const arrowAdd10 = num1 => num1 + 10;

console.log(add10(2)); // -> 12
console.log(arrowAdd10(2)); // -> 12

const arr = [{ prop: 'abc' }, { prop: 'def' }];
const props = arr.map(obj => obj.prop);
console.log(props); // -> [ 'abc', 'def' ]
