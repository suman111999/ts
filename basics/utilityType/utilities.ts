//Partial<Type>->make everything optional
interface User {
    id: number;
    name: string;
    email: string;
    age?: number | undefined;
}

type UserOptional = Partial<User>

//Required<Type>->make everything required(remove optionalality).
//oposite of Partial<Type>
type RequiredUser = Required<UserOptional>

//Pick<Type, Keys>->get a subset of properties from a type.
type EmailAndAge = Pick<User, 'email' | 'age'>
//uisng pick just pick type for provided key
// type EmailAndAge = {
//     email: string;
//     age?: number | undefined;
// }

//Omit<Type,keys>->omit(remove) the type for provided keys
//opposite of Pick<Type,keys> 
type WithoutEmailAndAge = Omit<User, 'email' | 'age'>

//Record<Keys,Type>->create a type with a set of properties.
type RecordUser = Record<string, User>
type RecordX = Record<User['id'], User>//so whenever id type change does not break ,take that defined type.

//Readonly<Type> or readonly keyword->make immutable

interface Cat {
    name: string;
    breed: string;
}


function Cat(name: string, breed: string): Cat {
    return {
        name,
        breed
    }
};

const cat = Cat('Tom', 'Tabby');
cat.name = 'july';// cat variable is const but we know we can chnage internal but we can not put whole diff obj in cat const variable.


//if want to make any property immutable use Readonly<Type> or readonly keyword
//Readonly<Type>->each property of Type would be readonly.
interface Cat1 {
    readonly name: string;
    breed: string;
}

type Cat2 = {
    readonly name: string;
    breed: string;
}


function Cat1(name: string, breed: string): Readonly<Cat> {
    return {
        name,
        breed
    }
};

const cat1 = Cat1('Tom', 'Tabby');
// cat1.name = 'Tom';//->throws error of immutability

//const
const reallyConst = [1, 3, 5] as const;
//reallyConst[0]=8;//->throws error of immutability

//Exclude<UnionType,want to remove type avalible in union>->remove provided type from union
type NumberStringOrBoolean = number | string | boolean;
type OnlyBoolean = Exclude<NumberStringOrBoolean, string | number>;

//Extract<UnionType,want to get type avalible in union>->get provided type from union

type NumberStringOrBoolean1 = number | string | boolean;
type OnlyNumberAndString = Extract<NumberStringOrBoolean1, number | string>;

//ReturnType<typeof function>->extract the return type from a function.

function add(a: number, b: number): number {
    return a + b;
}

type AddReturnType = ReturnType<typeof add>;
// type AddReturnType = number;

//Parameters<typeof function>->extract type of parametrs from a function
function add1(a: number, b: number): number {
    return a + b;
}
type AddParameters = Parameters<typeof add1>;
//type AddParameters = [a: number, b: number]

//NonNullable<Type>->remove null and undefined from Union Type

type NonNullableType = NonNullable<string | number | undefined>;


//Awaited->extract the resolved type of promise
async function fetchData(): Promise<string> {
    // fetch data from API and return a string
    return 'data';
}

type ResolvedResult = Awaited<ReturnType<typeof fetchData>>;
// type ResolvedResult = string