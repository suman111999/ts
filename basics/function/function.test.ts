import add, { concatString, fetch, mutatateArray, outer, printValue } from './function';
import { parseCoordinate, sayHello } from './function.overloading';
console.log(add(1, 2))
console.log(concatString('mohan', 'jay', 'kyam'))
console.log(concatString('ram', 'shyam'))

console.log(concatString(1, 'jay', 'kyam'))

console.log(fetch('https://example.com').then(res => console.log(res)));

//callback function
printValue('ram', () => {
    console.log('callback function')
})

console.log(mutatateArray([2, 6, 7, 8, 9, 10], (item) => item * 2))

//callback/clousser
const inner = outer(1)
console.log(inner(2))

//overloading function
console.log(sayHello('hello'))
console.log(sayHello(['ram', 'shyam']))
console.log(parseCoordinate(1, 3));
console.log(parseCoordinate({ x: 2, y: 7 }))
console.log(parseCoordinate('x:24, y:78'));
