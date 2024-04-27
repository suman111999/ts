console.log('hello')

function greet1(person: any, date: any) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
};
greet1("Maddison", new Date());

// const assertion->as const is used ,we cant modify it.
const req = { url: "https://example.com", method: "GET" } as const;
// req.url='x'->it will throw error



let x = true; 