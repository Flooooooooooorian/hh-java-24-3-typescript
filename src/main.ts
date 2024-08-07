console.clear()

console.log("Hello, World!")

function add(num1: number, num2: number): number {
    console.log("Add")
    return num1 + num2
}

const result: number = add(3, 5)

console.log(result)


const myFunction = (num1: number, num2: number): number => {
    console.log("Add");
    return num1 + num2;
}

const result2 = myFunction(8, 13)

console.log(result2)

const myList: number[] = [2, 9, 15, 0, -1, 6]

console.log(myList)

myList.push(19)

console.log(myList)

const filteredList: number[] = myList.filter((element) => element >= 5)

console.log(myList)
console.log(filteredList)

const stringArray: string[] = myList.map((currentElement) => currentElement.toString())

console.log(stringArray)

myList.sort()

console.log(myList)


console.log("---------------------------------")


type Person = {
    id: string,
    name: string,
    age: number
}

const myObject: Person = {
    id: "123",
    name: "Test",
    age: 564
}

const secondObject: Person = {
    id: "1234",
    name: "abc",
    age: 465
}

myObject.age = 53;
console.log(myObject.age)

type MyType = {
    list: string[]
    myObject: {}
}

type MyEnum = "OPEN" | "IN_PROCESS" | "DONE"

const myStatus: MyEnum = "DONE"

console.log(myStatus)

let myName: undefined
let myAge: null

let test: string | undefined

let abc: unknown = "string"

console.log(abc)

console.log(test?.length)

if (test !== undefined) {
    console.log(test.length)
}

const products: [] | undefined | null = undefined

const myFunction2: (num1: number, num2: number) => number = (num1, num2) => {
    console.log("Add");
    return num1 + num2;
}

const secondFunction: (num1: number) => string  =  ...
