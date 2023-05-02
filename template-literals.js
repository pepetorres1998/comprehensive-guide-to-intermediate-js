const str = `Hello there!
This new type of string keeps linebreaks in the string.
It also keeps all other types of whitespace.
A     tab is preserved correctly.
Multiple

linebreaks

are all

preserved

correclty.        Sweet.`;

console.log(str);

const firstName = 'Jose';
const lastName = 'Torres';

var oldWay = 'Hi, my name is ' + firstName + ' ' + lastName + '!';
const newWay = `Hi, my name is ${firstName} ${lastName}!`;

console.log(oldWay);
console.log(newWay);
