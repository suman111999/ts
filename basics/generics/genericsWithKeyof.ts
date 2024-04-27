//keyof
//this operator takes an object type and produces union of its keys.
type Staff = {
    name: string;
    salary: number;
}
type staffKeys = keyof Staff; // "name" | "salary"

//combing keyof and typeof 
//using typeof we can get the type 
//using keyof we can get the union of keys type
const userProfile = {
    username: 'john_doe',
    email: 'john@example.com',
    age: 30,
    isAdmin: false,
};
type UserProfileType = typeof userProfile;
type UserProfileKeys = keyof UserProfileType

// type UserProfileKeys = "username" | "email" | "age" | "isAdmin"



//generics with keyof
const testObj = { x: 10, y: "Hello", z: true };
function getProperty<T>(obj: T, key: keyof T) {
    return obj[key];
}

const xValue = getProperty(testObj, 'x');
const yValue = getProperty(testObj, 'y');
// const xValue: string | number | boolean
// const yValue: string | number | boolean
//But xValue type should be number only so it is not the exact typesafe.
//using extends we can make more stricter type safe


//useing extends we can make more strict type safe
function getProperty1<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const xValue1 = getProperty1(testObj, 'x');
// const xValue1: number
const yValue1 = getProperty1(testObj, 'y');
// const yValue1: string



export function pickDetails<DataType, keyType extends keyof DataType>(items: DataType[], key: keyType): DataType[keyType][] {
    return items.map(item => item[key]);

}

//eg:key: "age" | "name"
//return type->(string | number)[]
// DataType[keyType][]->means DataType is obj but its key must be of keyType , array of DataType[keyType](value)(it is like obj[key] i.e value) ([ 'sam', 'lo' ]).

