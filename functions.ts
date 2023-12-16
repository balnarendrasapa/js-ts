// define a type for a function that takes two numbers and returns a number
type typedFunction =  (x: number, y: number) => number;

const add: typedFunction = (x, y) => {
    return x + y
}

console.log(add(1, 2))

interface TypedFunctionInterface {
    (x: number, y: number): number
}
const add1: TypedFunctionInterface = (x, y) => {
    return x + y
}

console.log(add1(1, 2))