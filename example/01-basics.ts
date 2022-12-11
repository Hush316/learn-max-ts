function add(a: number, b: number, showRes: boolean, phrase: string) {
  const result = a + b
  if (showRes) {
    console.log(phrase + result)
  } else {
    return result
  }
}

const num1 = 2.8
const num2 = 22

const printRes = true
const resPhrase = 'Result is: '
add(num1, num2, printRes, resPhrase)
