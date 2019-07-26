class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;
    carId: string;

    constructor(
        model: String,
        doors: Number,
        isElectric: Boolean,
        carId: string
    ) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.carId = carId;
    }

    make(): void {
        let x: string;
        let carId: string;
        carId = this.carId;
        //x = "";
        let car = document.getElementById(carId);
        x = car.textContent;
        car.innerText =
            x + ` This car is ${this.model} which has ${this.doors} doors`;
        if (carId === "car2") car.style.background = "orange";
        if (carId === "car1") car.style.background = "pink";
    }
}

let car2 = new Car("Innova", 5, false, "car2");
let car1 = new Car("bmv", 5, true, "car1");
car2.make();
car1.make();
