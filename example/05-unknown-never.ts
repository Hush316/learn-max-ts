let userInput: unknown
let userName: string

userInput = 1
userInput = 'bot'
if (typeof userInput === 'string') {
  userName = userInput
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code }
}
const result = generateError('An error occurred', 500)
console.log(result)
