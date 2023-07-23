import { Component, Input } from '@angular/core';
import { Car } from '../models/cars';
import { CarServiceService } from '../service/car-service.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-cars.component.html',
  styleUrls: ['./list-cars.component.css']
})
export class ListCarsComponent {

  @Input() car: Car | null = null;
  cars: Car[] = [];
  selectedCar: Car | null = null;
  constructor(private service: CarServiceService) { }


  ngOnInit() {
    console.log("Getting data...");
    //his.albums = this.service.getAlbums(this.artist.Name);
    this.service.getCars((cars: Car[]) => {
      this.cars = cars;
      console.log('this.cars', this.cars);

    });
  }

  public onSelectCar(car: Car) {
    this.selectedCar = car;
  }
}
