// The Old Way

// function fn(obj) {
//   // We want to strip off properties to use individually.
//   var firstName = obj.firstName;
//   var lastName = obj.lastName;
//   var age = obj.age;
//   var occupation = obj.occupation;
// }

// var firstName = 'Sophia';
// var lastName = 'Lundgren';
// var age = 25;
// var occupation = 'Software Engineer';

// fn({
//   firstName: firstName,
//   lastName: lastName,
//   age: age,
//   occupation: occupation
// });

function fn({ firstName = 'Test', lastName = 'Test', age = 0, occupation = 'Worker' }) {
  // We already have all the variables we need!
  console.log(firstName, lastName, age, occupation);
}

const firstName = 'Sophia';
const lastName = 'Lundgren';
const age = 25;
const occupation = 'Software Engineer';

fn({ firstName, lastName, age, occupation });

fn({
  firstName: 'Jose',
  lastName: 'Torres',
  age: 25,
  occupation: 'Back-end Engineer'
});

fn({});

// Destructuring and Arrow Functions

const fnArrow = obj => obj.property;
const fnDestructured = ({property}) => property;

console.log(fnArrow({property: 'House'}));
console.log(fnDestructured({property: 'House'}));
