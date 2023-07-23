import { Component, Input } from '@angular/core';
import { CarServiceService } from '../service/car-service.service';
import { Car } from '../models/cars';

@Component({
  selector: 'app-edit-cars',
  templateUrl: './edit-cars.component.html',
  styleUrls: ['./edit-cars.component.css']
})
export class EditCarsComponent {
  wasSubmitted: boolean = false
  constructor(private service: CarServiceService) { }
  @Input() car: Car | null = null;
  sold: boolean = false;
  ngOnInit() { }

  public onSubmit() {
    this.service.updateCar(this.car!, this.test);
    console.log('The return from updateCar() was ' + status);
    if (this.car?.sold == true) {
      this.sold = true;
    }
    this.wasSubmitted = true;
  }

  test() {

  }
}
