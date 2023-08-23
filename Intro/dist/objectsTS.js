"use strict";
var Role;
(function (Role) {
    Role[Role["AUTHOR"] = 0] = "AUTHOR";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["ADMIN"] = 2] = "ADMIN";
})(Role || (Role = {}));
;
const people = {
    name: ' pri',
    age: 20,
    hobbies: ['cricket', 'coding'],
    power: ['attack', 99],
    role: Role.ADMIN
};
console.log(people.role);
if (people.role === Role.ADMIN) {
    console.log("is admin");
}
console.log(people);
let favthings;
for (const i of people.hobbies) {
    console.log(i.toUpperCase());
}
function combine(first, second, resultconversion) {
    let result;
    if (typeof first === "number" && typeof second === 'number' || resultconversion === 'as-number') {
        result = +first + +second;
    }
    else {
        result = first.toString() + second.toString();
    }
    return result;
}
const ans = combine('pri', 'ree', 'as-string');
const ans2 = combine('5', '4', 'as-number');
console.log(ans);
console.log(ans2);
