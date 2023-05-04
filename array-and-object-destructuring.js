// We can destructure the variables however we want.
// Array

const arr = [1, 2, 3];
let [one, two, three] = arr;
console.log(one, two, three); // -> 1 2 3

// Hash

const obj = {
  key1: 'val1',
  key2: 'val2'
};
const { key1, key2 } = obj;
console.log(key1, key2); // -> val1 val2

const person = {
  name: 'Jose',
  age: 24
}

const { name, age } = person;
console.log(name, age);

// We can use different variable names and assign the value we want for them.

const {
  name: nameFromHash,
  age: ageFromHash
} = person;

console.log(nameFromHash, ageFromHash);

const objTwo = {
  '#': 'hashValue',
  '&': 'ampersandValue'
}

const {
  '#': hash,
  '&': ampersand
} = objTwo;

console.log(hash, ampersand);

// We can assign default values in case the value we want isn't in the object.

// arr = [1, 2, 3]
// We didn't have to have a let for new variable (four)
[one = 'one', two = 'two', three = 'three', four = 'four'] = arr;

console.log(one, two, three, four);

const {
  city = 'city',
  favColor = 'green'
} = person;

console.log(city, favColor);
