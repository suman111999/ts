//parameter type
//return type
function add(a: number, b: number): number {
    return a + b;
}

//typescript does not like ->module.exports=add while importing the exported.
export default add;

//we can specify default parameter also.
//union type
export function concatString(str1: string | number, str2: string, str3: string = ''): string {
    return `${str1} ${str2} ${str3}`;
}

//void function->return nothing(void)

export function print(value: string): void {
    console.log(value);
}

//promise return type
export const fetch = (url: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 2000);
    })
}


//callbacks
export function printValue(text: string, callback: () => void): void {
    console.log(text);
    callback();
}

type callbackType = (v: number) => number
export function mutatateArray(data: number[], callback: callbackType): number[] {
    return data.map(callback);
}

//callback/clousure

export function outer(num: number): (val: number) => number {
    return function inner(val: number) { return num + val };
}

