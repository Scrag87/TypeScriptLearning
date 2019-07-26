var Car = /** @class */ (function () {
    function Car(model, doors, isElectric, carId) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.carId = carId;
    }
    Car.prototype.make = function () {
        var x;
        var carId;
        carId = this.carId;
        //x = "";
        var car = document.getElementById(carId);
        x = car.textContent;
        car.innerText = x + (" This car is " + this.model + " which has " + this.doors + " doors");
        if (carId === "car2")
            car.style.background = "orange";
        if (carId === "car1")
            car.style.background = "pink";
    };
    return Car;
}());
var car2 = new Car("Innova", 5, false, "car2");
var car1 = new Car("bmv", 5, true, "car1");
car2.make();
car1.make();
//# sourceMappingURL=script.js.map