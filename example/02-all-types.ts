interface PersonType {
  name: string
  age: number
  hobbies: string[]
  role: any
}

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
const person: PersonType = {
  name: 'babymoon',
  age: 25,
  hobbies: ['Sports', 'Cooking'],
  role: Role.AUTHOR,
}
// person.role?.push('admin')
person.role[0] = 22
for (const hobby of person.hobbies!) {
  console.log(hobby.toUpperCase())
}

switch (person.role) {
  case Role.ADMIN:
    console.log('is admin')
    break
  case Role.AUTHOR:
    console.log('is author')
    break
  case Role.READ_ONLY:
    console.log('is readly')
    break
  default:
    console.log('is ordinary')
    break
}
