type isString<T> = T extends string ? true : false
type x = isString<'hello'>;//true

type y = isString<number>//false