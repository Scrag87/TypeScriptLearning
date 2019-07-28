class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;
    carId: string;

    constructor(model: String, doors: Number, isElectric: Boolean, carId: string) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.carId = carId;
    }

    make(): void {
        let prevText: string;
        let car = document.getElementById(this.carId);
        prevText = car.textContent;
        car.innerText =
            prevText + ` This car is ${this.model} which has ${this.doors} doors`;
        if (this.carId === "car2") car.style.background = "orange";
        if (this.carId === "car1") car.style.background = "pink";
    }
}

let car2 = new Car("Innova", 5, false, "car2");
let car1 = new Car("bmv", 5, true, "car1");
car2.make();
car1.make();
