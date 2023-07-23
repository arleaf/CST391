export class Car {
    carId: number = -1;
    make: string = "";
    model: string = "";
    year: string = "";
    sold: boolean = false;

    constructor(carId: number, make: string, model: string, year: string, sold: boolean) {
        this.carId = carId;
        this.make = make;
        this.model = model;
        this.year = year;
        this.sold = sold;
    }

}