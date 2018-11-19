class Car {
    constructor(year, make, model) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.running = false;
        this.speed = 0;
    }
    
    turnOn() {
        this.running = true;
    }

    turnOff() {
        this.running = false;
    }

    changeSpeed(accel) {
        this.speed += accel;
    }
}

let car1 = new Car(2018, "Ford", "Mustang");
let car2 = new Car(1962, "Ferrari", "250 GTO");
let car3 = new Car(2016, "Bugatti", "Chiron");

car3.turnOn();
car3.changeSpeed(50);
car3.changeSpeed(30);
car3.changeSpeed(-80);
car3.turnOff();