// Primitive types are copied by value: Boolean, null, undefined, String, and Number.
// Objects are copied by having their reference copied: Array, Function, and Object.

const a = 1;
let b = 2;
let c = a;
const d = b;

b = 1;
c = 2;

// a -> 1, b -> 1, c -> 2, d -> 2
// If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.

console.log(a, b, c, d);

// When the type is Object is assigned the reference, so if the object changes it gets reflected on its copies as-well.

const reference = [1];
const refCopy = reference;

reference.push(2);

console.log(reference, refCopy);

// == and ===

// When the equality operators, == and ===, are used on reference-type variables, they check the reference.

const arrRef = ['Hi!'];
const arrRef2 = arrRef;
const arrRef3 = ['Hi!'];

console.log(arrRef === arrRef2); // -> true
console.log(arrRef === arrRef3); // -> false

// Pure functions

// changeAgeImpure
// It affects its outer scope.

function changeAgeImpure(person) {
  person.age = 25;
  return person;
}

const alex = {
  name: 'Alex',
  age: 30
};

const changedAlex = changeAgeImpure(alex);

console.log(alex); // -> { name: 'Alex', age: 25 }
console.log(changedAlex); // -> { name: 'Alex', age: 25 }
console.log(alex === changedAlex); // -> true

// changeAgePure
// It doesn't affect its outer scope.

function changeAgePure(person) {
  const newPersonObj = JSON.parse(JSON.stringify(person));
  newPersonObj.age = 25;
  return newPersonObj;
}

const jose = {
  name: 'Jose',
  age: 20
};

const joseChanged = changeAgePure(jose);

console.log(jose); // -> { age: 20 }
console.log(joseChanged); // -> { age: 25 }
console.log(jose === joseChanged); // -> false

// When using const in objects we can't reassign constArr to a diferent reference or value.

var varArr = [];
let letArr = [];
const constArr = [];

varArr.push(3);
letArr.push(4);
constArr.push(5);

varArr = ['New var array'];
letArr = ['New let array'];
// constArr = ['New const array']; // -> Uncaught TypeError: Assignment to constant variable.
