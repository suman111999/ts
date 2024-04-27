//primitive

let employeeName: string = 'Ram mohan sundar';
let rollNumber: number = 1;
let isEnabled: boolean = false;

//Regex
let myRegex: RegExp = /foo/;

//Array
const names: string[] = employeeName.split(' ');
const values: number[] = [1, 3, 6]
const flags: boolean[] = [true, false, false]

const items: (string | number)[] = [1, 7, 'k']

const myitems: Array<number | boolean> = [1, 7, 9, true];// using generic

//objects

interface Person {
    firstName: string;
    lastName: string;
}
let person: Person = {
    firstName: 'John',
    lastName: 'Smith',
}
// person['middleName'] = 'sohan'->error
//in above object i cant insert diff key if we need to then use Record

const employeeIds: Record<number, string> = {
    1: 'mohan',
    2: 'sundar'
}
employeeIds[3] = 'ram'//no error

//any type
//it means any type eg.string or array or null etc. so we want to avoid it and cotrol the type.

//unknown type->it is type-safe counterpart of any.
//it is needed to be norrow down or caste it before use.
//explore more

//never type