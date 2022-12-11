abstract class Department {
  // private id: string
  // private name: string
  static fiscalYear = 2020
  protected employess: string[] = []
  constructor(protected readonly id: string, public name: string) {
    // this.id = id
    // this.name = n
  }

  static createEmployee(name: string) {
    return { name: name }
  }

  abstract describe(this: Department): void

  addEmployess(employee: string) {
    this.employess.push(employee)
  }

  printEmployessInformation() {
    console.log(this.employess.length)
    console.log(this.employess)
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT')
  }
  describe(): void {
    console.log('ITDepartment id: ' + this.id)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string
  private static instance: AccountingDepartment
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No Report Found')
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!')
    }
    this.addReport(value)
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'ACCOUNTING')
    this.lastReport = reports[0]
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance
    }
    this.instance = new AccountingDepartment('d2', [])
    return this.instance
  }
  describe(): void {
    console.log('AccountDepartment id: ' + this.id)
  }
  logLastReport() {
    console.log(this.lastReport)
  }
  addEmployee(name: string) {
    if (name === 'Moon') {
      return
    }
    this.employess.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }
  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Moon')
// console.log(employee1, Department.fiscalYear)

const it = new ITDepartment('d1', ['ZJ'])
// it.describe()
// it.addEmployess('bob')
// it.addEmployess('bot')
// it.printEmployessInformation()
// console.log(it)

// const account = new AccountingDepartment('d2', [])
const account = AccountingDepartment.getInstance()
const account2 = AccountingDepartment.getInstance()

account.mostRecentReport = 'Year End Report'
// console.log(account.mostRecentReport)
// account.addEmployee('Moon')
// account.addEmployee('biu')
// account.addReport('Something went wrong...')
// account.printReports()
// account.printEmployessInformation()
account.logLastReport()
account.describe()
