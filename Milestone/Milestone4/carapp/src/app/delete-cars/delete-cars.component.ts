import { Component } from '@angular/core';
import { CarServiceService } from '../service/car-service.service';
import { Car } from '../models/cars';

@Component({
  selector: 'app-delete-cars',
  templateUrl: './delete-cars.component.html',
  styleUrls: ['./delete-cars.component.css']
})
export class DeleteCarsComponent {

  Car: Car = new Car(-1, '', '', '', false);
  wasSubmitted: boolean = false;

  constructor(private service: CarServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.deleteCar(this.Car.carId, this.test);
    console.log('The return from createCar() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }
}
