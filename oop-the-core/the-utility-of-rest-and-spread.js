const arr = [1, 2, 3, 4, 5];
const arr2 = ['abc', 'def', ...arr];

console.log(arr2);

const toyota = { company: 'Toyota' };
const corolla = { ...toyota, model: 'Corolla' };
console.log(corolla);

// Copying an array or object is now as simple as using ... operator

const arrCopy = [...arr];
const toyotaCopy = {...toyota};

console.log(arrCopy);
console.log(toyotaCopy);

arr.push(6);

console.log(arr);
console.log(arrCopy);

// It can also spread array values into a function

function addLog(num1, num2) {
  console.log(num1 + num2);
}

addLog(...[1, 2]);
addLog(...arr); // Takes first 2 numbers

// Strings can be spread into arrays and objects

const str = 'abcde';
const strArr = [...str];
console.log(strArr);

function fn({ name = 'John Doe', age = 25, ...otherDetails } = {}) {
  console.log(name);
  console.log(age);
  console.log(otherDetails);
}

fn();
// -> John Doe
// -> 25
// -> {}

const [one, two, ...rest] = arr;
console.log(rest); // -> [3, 4, 5]

const obj = {
    key1: 'val1',
    key2: 'val2',
    key3: 'val3'
};

const { key1, ...others } = obj;
console.log(others); // -> { key2: 'val2', key3: 'val3' }
