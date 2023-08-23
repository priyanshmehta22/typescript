const num1 = document.getElementById("num1")! as HTMLInputElement;
const num2 = document.getElementById("num2")! as HTMLInputElement;
const btn = document.getElementById("btn")!;


function addn(num1:number, num2:number){
    return num1+num2;
}

btn.addEventListener("click",()=>{
    console.log(addn(+num1.value,+num2.value));
})
