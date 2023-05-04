// Scope Persistence

function fnGenerator(str) {
  const stringToLog = 'The string I was given is "' + str + '"';

  return function() {
      console.log(stringToLog);
  }
}

const fnReturned = fnGenerator('Bat-Man');
const fnReturnedTwo = fnGenerator('Ant-Man');
fnReturned(); // -> The string I was given is "Bat-Man"
fnReturnedTwo();

// Dynamically Generating Functions

function addFactory(storedNum) {
  return function(num2) {
      return storedNum + num2;
  }
}

const add10 = addFactory(10);
const add20 = addFactory(20);
const add30 = addFactory(30);

console.log(add10(5)); // -> 15
console.log(add20(6)); // -> 26
console.log(add30(7)); // -> 37

// Encapsulation

function counterGenerator() {
  let counter = 1;

  return function() {
      return counter++;
  }
}

const incrementCounter = counterGenerator();
console.log(incrementCounter()); // -> 1
console.log(incrementCounter()); // -> 2
counter = 100; // <- sets a new global variable 'counter';
             // the one inside counterGenerator is unchanged
console.log(incrementCounter()); // -> 3
