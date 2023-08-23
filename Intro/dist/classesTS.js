"use strict";
class Department {
    constructor(n, i, a) {
        this.employees = [];
        this.name = n;
        this.id = i;
        this.age = a;
    }
    describe() {
        console.log("Name: " + this.name + " " + this.id + " " + this.age);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printInfo() {
        console.log(this.employees);
    }
}
const accounting = new Department('Priyansh', 2292, 20);
accounting.describe();
console.log(accounting);
accounting.addEmployee('RAJUUUUUU');
accounting.addEmployee('REEEEEEEE');
accounting.addEmployee('KUTTING');
accounting.printInfo();
class abc {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(id);
    }
    tellID() {
        console.log(this.id);
    }
}
const xyz = new abc(123, 'pri');
class ITdept extends Department {
    get mostRecentRep() {
        if (this.lastrep) {
            return "lastRep: " + this.lastrep;
        }
        throw new Error("no rep found");
    }
    set mostRecentRep(value) {
        if (!value)
            throw new Error("add valid report");
        this.addReport(value);
    }
    constructor(id, admins) {
        super('priyansh', id, 22);
        this.reports = [];
        this.admins = admins;
        this.lastrep = this.reports[0];
    }
    addReport(text) {
        this.reports.push(text);
        this.lastrep = text;
    }
    showReport() {
        for (var i = 0; i < this.reports.length; i++) {
            console.log(this.reports[i]);
        }
    }
    addEmployee(name) {
        if (name === 'Pri')
            return;
        this.employees.push(name);
    }
}
const it = new ITdept(25, ['admin1']);
it.addReport('this is a report');
it.addReport('this is a report2');
console.log(it.mostRecentRep);
it.showReport();
it.printInfo();
it.addEmployee('IT GUY');
const it2 = new ITdept(22, ['admin2']);
console.log(it);
it.mostRecentRep = 'value for setter';
it.addEmployee('rajshree');
it.addEmployee('rajshree2');
it.printInfo();
class School {
    constructor(n, a, i) {
        this.name = n;
        this.age = a;
        this.id = i;
    }
    static addStudent(name, age, id) {
        return { name: name, age: age, id: id };
    }
}
const stud1 = School.addStudent('Priyansh', 20, '20BCE2292');
console.log(stud1);
