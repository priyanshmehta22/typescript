//return types for function

function add(n1:number,n2:number):number{
    return n1+n2;
}
// console.log(add(5,6));

function printResult(num:number):void{   // writing void as the function does not havea return statement
    console.log("RESULT: "+ num);
}
printResult(add(5,6));



//function as a type
// let combined:Function; 
let combined: (a:number,b:number)=>number;  // to make it more precise. 2 inputs as numbers and output as number

// combined = 5;  //error as 5 is not a function
// combined=printResult //no error here, but at runtime there will be error as printResult does not have 2 arguments

combined=add;  //no error as add is a function
console.log(combined(5,6));



//callback function
function addandhandle(n1:number,n2:number,cb:(res:number)=>void){
    const result = n1+n2;
    cb(result);
}
addandhandle(10,20,(ans)=>{
    console.log("callback: "+ ans);
});



//spread operator: works on arrays and objects

const array1:string[] = ['pri','ree','xyz'];
const arr2:string[] = ['tony'];

arr2.push(...array1);  //spread operator= ...
for(const i of arr2){
    console.log(i);
}


const person={
    name:'pri',
    age:20
}

const copy  ={ ...person};
console.log(copy);

const restParamAddn= (...numbers:number[]):number => {
    let result=0;
    for(const i of numbers){
        result+=i;
    }
    return result;
}
console.log(restParamAddn(4,2,4,6,345,32,5,63,2));



// Array Destructure
const hobbies= ['cricket', 'coding', 'swim','sleep','code'];
let [hobby1, hobby2, ...resthobbiesarray] = hobbies;
console.log(hobby1,hobby2,resthobbiesarray);


//Object Destructure
const hobbyobj={
    fname:'pri',
    age:20
};
const {fname:userName,age} = hobbyobj;  //cannot use arbitrary names
console.log(userName,age);
