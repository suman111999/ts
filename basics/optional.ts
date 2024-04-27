//we can not put a required parameter after an optional parameter.

//it throws error
// function print1(q: number, q1?: number, q2: number) {
//     console.log(q, q1,q2);
// }

interface Employee {
    id: string;
    info?: {
        email?: string
    }
}

// using ! mark we are saying typescript that I know better as it never will be undefined or null.
//it should not be used.
function getEmail1(user: Employee): string {
    return user.info!.email!;
}

function getEmail2(user: Employee): string {
    if (user.info?.email) {
        return user.info.email;
    }
    return '';
}

//best way to handle optional
function getEmail3(user: Employee): string {
    return user.info?.email ?? '';
}

function getEmail4(callback?: () => string) {
    callback?.()
}