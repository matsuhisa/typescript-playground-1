function reverse<S>(items: S[]): S[] {
  let toreturn = []
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i])
  }
  return toreturn
}

let stringArray: String[]
stringArray = ["foo", "bar"]
let r = reverse(stringArray)

console.log(stringArray)
console.log(r)

// Safe
// r[0] = "123"
// Error
// r[0] = 456


// interface Human {
//   name: string
//   age: number
// }

// const foo: Human = {
//   name: "foo",
//   age: 20
// }
// console.log(foo.name)

// let stringArray: String[]
// stringArray = [123, "bar"]
// console.log(stringArray[0])
// console.log(stringArray.length)

// function foo(arg: number):number {
//   return arg*2
// }
// const bar = "2"
// console.log(foo(bar))


// class Quee<T> {
//   private data = []

//   push(item: T) {
//     this.data.push(item)
//   }

//   pop() {
//     this.data.shift()
//   }
// }

// const q = new Quee<Number>()
// q.push(0)
// // q.push('1')

// console.log(q)