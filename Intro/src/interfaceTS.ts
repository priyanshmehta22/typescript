interface Greetable extends Named{   //interface cannot have an initializer ans has no implementation details 
    //interface only exists in TS and are discarded in JS
    greet(phrase:string):void
}
interface Named{
    readonly name:string;
    outputname?:string;  // ? is for defining optional param
}
class Person implements Greetable{
    name: string;
    age=20;
    constructor(n:string){
        this.name=n;
    }
    greet(phrase:string){
        console.log(phrase+" "+this.name);
    }
}

let user1:Greetable;  // can be user1:Person too
user1= new Person('pri');
console.log(user1);


//interface forces the method to be called in the class
user1.greet("helloooo");