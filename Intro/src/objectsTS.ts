//objects

enum Role {AUTHOR,READ_ONLY,ADMIN};  // or  {AUTHOR=1,READ-ONLY=5,ADMIN=7} if you want to assign values to these roles

const people
// :{
//     name:string;    //not a good practice
//     age:number;
//     hobbies: string[];
//     role: (number|string)[];
//     power: [string,number];   //tuple(same size and same type), push is allowed in tuples as exception.
// } 
= {
    name: ' pri',
    age:20,
    hobbies: ['cricket', 'coding'],
    // role: ['author',2], //union of 2 types
    power: ['attack',99],
    role:Role.ADMIN
};

// people.role.push('admin');
// people.role[1]=20;
console.log(people.role);
if(people.role===Role.ADMIN){
    console.log("is admin");
}
console.log(people);


let favthings: any[]; //not a good practice

for(const i of people.hobbies){
    console.log(i.toUpperCase());
}


// custom types or type aliases
type StringOrNum = string |number;  //can use this to define custom types on variables, like used below.

//working with unions
function combine(first: StringOrNum, second: StringOrNum, resultconversion: 'as-number'| 'as-string'){
    let result;
    if(typeof first==="number" && typeof second==='number' || resultconversion==='as-number'){
        result =  +first + +second;
    }
    else{
        result= first.toString()+second.toString();
    }
    return result;
}

const ans = combine('pri','ree','as-string');
const ans2= combine('5','4','as-number');
console.log(ans);
console.log(ans2);
