var Car = /** @class */ (function () {
    function Car(model, doors, isElectric, carId) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
        this.carId = carId;
    }
    Car.prototype.make = function () {
        var prevText;
        prevText = car.textContent;
        car.innerText =
            prevText + (" This car is " + this.model + " which has " + this.doors + " doors");
        if (this.carId === "car2")
            car.style.background = "orange";
        if (this.carId === "car1")
            car.style.background = "pink";
    };
    return Car;
}());
var car2 = new Car("Innova", 5, false, "car2");
var car1 = new Car("bmv", 5, true, "car1");
car2.make();
car1.make();
//# sourceMappingURL=script.js.map