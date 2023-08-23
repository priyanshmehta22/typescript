"use strict";
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const btn = document.getElementById("btn");
function addn(num1, num2) {
    return num1 + num2;
}
btn.addEventListener("click", () => {
    console.log(addn(+num1.value, +num2.value));
});
