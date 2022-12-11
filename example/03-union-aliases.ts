type Combinable = number | string
type CoversionDescriptor = 'as-number' | 'as-text'
function combine(
  input1: Combinable,
  input2: Combinable,
  resConversion: CoversionDescriptor
) {
  let result
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resConversion === 'as-number'
  ) {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  if (resConversion === 'as-number') {
    return +result
  } else {
    return result.toString()
  }
}

const combineAges = combine(20, 30, 'as-number')
const combineStringAges = combine('30', '26', 'as-number')
console.log(combineStringAges)

const combineNames = combine('Baby', 'moon', 'as-text')
console.log(combineAges)
console.log(combineNames)
