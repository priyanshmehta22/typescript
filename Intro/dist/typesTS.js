"use strict";
const e1 = {
    name: 'max',
    privileges: ['create-server'],
    startDate: new Date()
};
function printEmployee(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log(emp.privileges);
    }
    if ('startDate' in emp) {
        console.log(emp.startDate);
    }
}
printEmployee(e1);
class Car {
    drive() {
        console.log("abc");
    }
}
class Truck {
    drive() {
        console.log("abc");
    }
    toggle() {
        console.log("sisdjfb");
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Truck) {
        vehicle.toggle();
    }
    vehicle.drive();
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'horse':
            speed = animal.Runspeed;
            break;
        case 'bird':
            speed = animal.flySpeed;
            break;
    }
    console.log("moving with speed: " + speed);
}
moveAnimal({ type: 'bird', flySpeed: 100 });
