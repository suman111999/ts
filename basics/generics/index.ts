import { customFilter, customForEach, customMap, ranker, useState } from "./basics"
import { pickDetails } from "./genericsWithKeyof";
//basics
const [name1, setName1] = useState('mohan');

console.log(name1());
setName1('shyam')
console.log(name1());

const [quintity, setQuintity] = useState(1);

console.log(quintity());
setQuintity(10);
console.log(quintity());

//basics->overriding the initial type
const [type, setType] = useState<string | null>(null);

console.log(type());
setType('lead')
console.log(type());

interface xType {
    name: string;
    r: number;
}
const x: xType[] = [
    {
        name: 'lead',
        r: 4
    }, {
        name: 'dev',
        r: 0
    }
]
console.log(ranker(x, ({ r }) => r))

//basics->forEach

customForEach([1, 5, 6], (v) => { console.log(v * 2) })

//basics->filter
console.log(customFilter([5, 7, 8], (v) => v > 6))

//basics->map

console.log(customMap([1, 2, 3, 4], (v) => { return { 'q': v * 3 } }))


//generic with keyof
const dogs = [
    { name: 'sam', age: 12 },
    { name: 'lo', age: 19 }
]
console.log(pickDetails(dogs, "age"))
console.log(pickDetails(dogs, 'name'))