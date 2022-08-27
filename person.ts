export class Person {
  firstname: string;
  middlename: string;
  lastname: string;
  age: number;

  emails: Array<string> = new Array();

  fullnm() {
    return this.firstname + ' ' + this.middlename + ' ' + this.lastname;
  }

  Birthday() {
    return new Date().getFullYear() - this.age;
  }
}
