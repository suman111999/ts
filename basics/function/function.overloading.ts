//overloading
//multiple functions with same name and diff parameter types and return type.(diff signature).


//1st declare multiple functions with same name with diff signature.->using this compiler decide which version of function to use

//then implement
//implementation signatures must be generic like unknown or any so that it can support multiple type of signature.


// Union vs function overloading?
// Function overloading maps for specific input type to specific return type. But in an union return type can anyone of the mentioned for any one of input type.

//m-1->using unions(not  using overloading)
// function sayHello(name: string | string[]): string | string[] {
//     return name
// }

//m-2->overloading
export function sayHello(name: string): string;
export function sayHello(name: string[]): string[];
export function sayHello(name: unknown): unknown {
    //checking at runtime
    if (typeof name === 'string') {
        return `Hello ${name}`

    } else if (Array.isArray(name)) {
        return name.map(item => `Hello ${item}`)
    }
}

//using arrow function
//for overloading avoide arrow function
//as multiple variable with same name can not be created so arrow function overloading can not be using above way. there is a work around  that is craete only one function implemetion only but define mutiple return type to variable.

type sayHiType = {
    (name: string): string | string[] | undefined;
    (name: string[]): string[] | string | undefined;
}
export const sayHi: sayHiType = (name: unknown) => {
    if (typeof name === 'string') {
        return `Hello ${name}`

    } else if (Array.isArray(name)) {
        return name.map(item => `Hello ${item}`)
    }
    // return [name] as string | undefined | string[]
}



//----------------
interface Coordinate {
    x: number;
    y: number;
}

export function parseCoordinate(obj: Coordinate): Coordinate;
export function parseCoordinate(x: number, y: number): Coordinate;
export function parseCoordinate(str: string): Coordinate;
export function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {

    let coord: Coordinate = {
        x: 0,
        y: 0
    }

    if (typeof arg1 === 'object') {
        coord = {
            ...(arg1 as Coordinate)
        }
    } else if (typeof arg1 === 'string') {
        const [x, y] = arg1.split(',');
        const [xKey, xValue] = x.split(':');
        const [yKey, yValue] = y.split(':');

        coord = {
            x: parseInt(xValue),
            y: parseInt(yValue)
        }
    }
    else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }
    return coord;
}
