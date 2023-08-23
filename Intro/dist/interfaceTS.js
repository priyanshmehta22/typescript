"use strict";
class Person {
    constructor(n) {
        this.age = 20;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person('pri');
console.log(user1);
user1.greet("helloooo");
