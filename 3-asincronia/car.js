class Car {
    constructor() {
        this.brand = 'Ford';
        this.model = 'Fiesta';
        this.color = 'red';
    }
}

function printModel(car) {
    console.log(car.model);
}

function printColor(car) {
    console.log(car.color);
}   

export default Car;
