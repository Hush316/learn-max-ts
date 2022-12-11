function add(n1: number, n2: number): number {
  return n1 + n2
}

function printResult(num: number): void {
  console.log('Result: ' + num)
}
printResult(add(11, 17))

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

let combineValues: (a: number, b: number) => number
combineValues = add
console.log(combineValues(3, 8))

addAndHandle(10, 29, (res) => {
  console.log(res)
})
