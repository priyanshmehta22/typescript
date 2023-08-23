

type Admin = {
    name:string;
    privileges:string[];
};

type Employee={
    name:string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;  //intersection type

const e1: ElevatedEmployee={
    name:'max',
    privileges:['create-server'],
    startDate: new Date()
}

type Combinable= number|string;
type Numeric = boolean|number;

type Universal = Combinable & Numeric;

type UnknownEmployee = Employee | Admin;
function printEmployee(emp:UnknownEmployee){
    console.log(emp.name);
    if('privileges' in emp){   //typeguard
        console.log(emp.privileges);
    }
    if('startDate' in emp){
        console.log(emp.startDate);
    }
}

printEmployee(e1);

class Car{
    drive(){
        console.log("abc");
    }
}

class Truck{
    drive(){
        console.log("abc");
    }
    toggle(){
        console.log("sisdjfb");
    }
}

type Vehicle=Truck | Car;

const v1 = new Car();
const v2 =  new Truck();

function useVehicle(vehicle:Vehicle){
    if(vehicle instanceof Truck){     //instanceof does not work on interfaces as it is not compiled in JS
        vehicle.toggle();
    }
    vehicle.drive();
}

useVehicle(v1);
useVehicle(v2);

//more on typeguard
interface Horse{
    type: 'horse'; // not the type for assignment of type, but a property called type of value string
    Runspeed:number;
}
interface Bird{
    type:'bird';  //it is a discriminated union as every interface has a property of type
    flySpeed:number;
}

type Animal= Bird| Horse;

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'horse':
            speed =animal.Runspeed;
            // console.log("moving with speed: "+animal.Runspeed);
            break;
        case 'bird':
            speed=animal.flySpeed;
            // console.log("moving with speed: "+animal.flySpeed);
            break;
    }
    console.log("moving with speed: "+speed);
}

moveAnimal({type:'bird',flySpeed:100});


//typecasting