class Department{
    name:string;
    readonly id:number;   //only read
    age:number;
    protected employees:string[]=[];  //can access employees outside class Dept. but cannot modify it, used for inheriting classes  

    constructor(n:string,i:number,a:number){
        this.name=n;
        this.id=i;
        this.age=a;
    }
    describe(this:Department) {
        console.log("Name: "+this.name+" "+this.id+" "+this.age);
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printInfo(){
        console.log(this.employees);
    }
}

const accounting = new Department('Priyansh',2292,20);
accounting.describe();
console.log(accounting);

// const accCopy = {name:'PRI',id:7,age:20,describe:accounting.describe};  //this is valid because it is of the format of Dept
// //describe:acc.describe is alloting acc.describe function without calling hence no '()' to a variable describe

// accCopy.describe();

accounting.addEmployee('RAJUUUUUU');
accounting.addEmployee('REEEEEEEE');
accounting.addEmployee('KUTTING');
accounting.printInfo();




//Another way for class creation:
class abc{
    constructor(private readonly id:number,public name:string){
        console.log(id);
    }
    tellID(){
        console.log(this.id);
    }
}
const xyz =new abc(123,'pri');

//inheritence

class ITdept extends Department{    //base class ka constructor also is inherited  instantiate
    private reports:string[]=[];
    admins:string[];
    private lastrep:string;

    get mostRecentRep(){  //getter
        if(this.lastrep){
            return "lastRep: "+this.lastrep;
        }
        throw new Error("no rep found");
    }

    set mostRecentRep(value:string){
        if(!value) throw new Error("add valid report");
        this.addReport(value);
    }
    constructor(id:number, admins:string[]){
        super('priyansh',id,22);  //calls constructor of base class(dept)
        this.admins=admins;
        this.lastrep = this.reports[0];
    }

    addReport(text:string){
        this.reports.push(text);
        this.lastrep=text;
    }
    showReport(){
        for(var i=0;i<this.reports.length;i++){
            console.log(this.reports[i]);
        }
    }
    addEmployee(name: string): void {
        if(name==='Pri')return;
        this.employees.push(name);
    }
}



const it = new ITdept(25,['admin1']);
it.addReport('this is a report');
it.addReport('this is a report2');
console.log(it.mostRecentRep);
it.showReport();
it.printInfo();
it.addEmployee('IT GUY');
const it2 = new ITdept(22,['admin2']);
console.log(it);
// console.log(it2);
it.mostRecentRep = 'value for setter';
it.addEmployee('rajshree');
it.addEmployee('rajshree2');
it.printInfo();

// console.log("IT: "+it);
// it.describe();


//static methods can be called directly on the class without using new keyword

class School{
    public name:string;
    public age:number;
    protected id:string;
    constructor(n:string, a:number, i:string){
        this.name=n; 
        this.age=a;
        this.id=i;
    }
    static addStudent(name:string,age:number,id:string){
        return{name:name, age:age, id:id};
    }
}

const stud1 = School.addStudent('Priyansh',20,'20BCE2292');
console.log(stud1);

//static method can only access static property