import { Component, Input } from '@angular/core';
import { Car } from '../models/cars';
import { CarServiceService } from '../service/car-service.service';

@Component({
  selector: 'app-display-cars',
  templateUrl: './display-cars.component.html',
  styleUrls: ['./display-cars.component.css']
})
export class DisplayCarsComponent {

  @Input() car: Car | null = null;
  sold: boolean = false;
  editCar: Car | null = null;

  constructor(private service: CarServiceService) { }

  ngOnInit() {
    console.log("Getting data ....");
    console.log("Car", this.car);
    if (this.car?.sold == true) {
      this.sold = true;
    }
  }
  public onEditCar(car: Car) {
    this.editCar = car;
  }

}
