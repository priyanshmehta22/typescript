const parag = <HTMLInputElement> document.getElementById("messageOutput")!;   //<..> is typecasting
// it makes sure that the const parag is of the type HTMLInputElement

// In react project, there is an alt: 
// const parag = document.getElementById("messageOutput")! as HTMLInputElement; 
parag.value="hi there"; 



//FORM VALIDATION
//INDEX PROPERTY / INDEX TYPES

interface ErrorMessage{
    [prop:string]:string;    // a property who has a String key and a string value, but that property key name is unknown and dynamic

}

const errorBag: ErrorMessage = {
    Email : ' not a valid email',
    username: 'must start with a character'
}


const Rerson={
    id:1,
    name:'PRI',
    job:{title:'ceo',desc:'my company'}
}

console.log(Rerson?.job?.title);   //this is optional chaining: it checks if Rerson exists, then only it will check 
//job, if job exists then only it will check for title. It will not lead to a runtime error


//nullish coalescing  = ??
const userInput = '';

const userout = userInput ?? 'DEFAULT';   //only if userInput is null or undefined we will use the value 'Default' else
// for other values even as empty string it will show as empty string or that particular string itself
console.log(userout);