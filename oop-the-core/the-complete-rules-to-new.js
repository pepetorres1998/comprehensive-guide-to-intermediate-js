// Original function, I improved it following past lessons.
// function personFn(name, age) {
//   const personObj = {};

//   personObj.name = name;
//   personObj.age = age;
  
//   return personObj;
// }

function personFn(name, age) {
  return {
    name,
    age
  };
}

const alex = personFn('Alex', 30);
console.log(alex); // -> { name: 'Alex', age: 30 }

// new

// Using constructors, which are functions that are meant to be invoked with new

function PersonConstructor(name, age) {
  // this = {};
  // this.__proto__ = PersonConstructor.prototype;

  // if (there is a return statement
  // in the function body that
  // returns anything EXCEPT an
  // object, array, or function) {
  //     return 'this' (the newly
  //     constructed object)
  //     instead of that item at
  //     the return statement;
  // }

  this.name = name;
  this.age = age;

  // return this;{
}

const christa = new PersonConstructor('Christa', 30);
console.log(christa); // -> { name: 'Christa', age: 30 }

function Demo() {
  console.log(this);
  this.value = 5;
  return 10;
}

/*1*/ const demo = new Demo(); // -> Demo {}
/*2*/ console.log(demo.__proto__ === Demo.prototype); // -> true
/*3*/ console.log(demo); // -> Demo { value: 5 }
/*4*/ console.log(demo.value); // -> 5

function SecondDemo() {
  this.val = '2nd demo';
}

/*4*/ console.log(new SecondDemo()); // -> SecondDemo { val: '2nd demo' }
