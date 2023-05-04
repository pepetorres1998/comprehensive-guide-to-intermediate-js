const name = 'Jose';
const age = 24;

const person = {
  name,
  age
}

console.log(person);

// Methods

const obj1 = {
  name,
  age,
  growOlder: function() {
      this.age++;
  }
}

const obj2 = {
  name,
  age,
  growOlder() {
      this.age++;
  }
}

obj2.growOlder();

console.log(obj2);

// Setters & Getters

const firstName = 'Jose';
const lastName = 'Torres';

const person2 = {
  firstName,
  lastName,
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(person2.fullName);
