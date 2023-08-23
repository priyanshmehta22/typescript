"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("RESULT: " + num);
}
printResult(add(5, 6));
let combined;
combined = add;
console.log(combined(5, 6));
function addandhandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addandhandle(10, 20, (ans) => {
    console.log("callback: " + ans);
});
const array1 = ['pri', 'ree', 'xyz'];
const arr2 = ['tony'];
arr2.push(...array1);
for (const i of arr2) {
    console.log(i);
}
const person = {
    name: 'pri',
    age: 20
};
const copy = Object.assign({}, person);
console.log(copy);
const restParamAddn = (...numbers) => {
    let result = 0;
    for (const i of numbers) {
        result += i;
    }
    return result;
};
console.log(restParamAddn(4, 2, 4, 6, 345, 32, 5, 63, 2));
const hobbies = ['cricket', 'coding', 'swim', 'sleep', 'code'];
let [hobby1, hobby2, ...resthobbiesarray] = hobbies;
console.log(hobby1, hobby2, resthobbiesarray);
const hobbyobj = {
    fname: 'pri',
    age: 20
};
const { fname: userName, age } = hobbyobj;
console.log(userName, age);
