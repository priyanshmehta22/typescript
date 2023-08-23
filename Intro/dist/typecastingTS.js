"use strict";
var _a;
const parag = document.getElementById("messageOutput");
parag.value = "hi there";
const errorBag = {
    Email: ' not a valid email',
    username: 'must start with a character'
};
const Rerson = {
    id: 1,
    name: 'PRI',
    job: { title: 'ceo', desc: 'my company' }
};
console.log((_a = Rerson === null || Rerson === void 0 ? void 0 : Rerson.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const userout = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(userout);
