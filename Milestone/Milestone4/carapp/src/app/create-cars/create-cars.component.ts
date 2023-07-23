import { Component, NgModule, OnInit } from '@angular/core';
import { Car } from '../models/cars';
import { CarServiceService } from '../service/car-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-create-cars',
  templateUrl: './create-cars.component.html',
  styleUrls: ['./create-cars.component.css']
})
export class CreateCarsComponent implements OnInit {
  wasSubmitted: boolean = false;
  Car: Car = new Car(Math.floor(Math.random() * 1000000), '', '', '', false);
  constructor(private service: CarServiceService) { }

  ngOnInit() { }

  public onSubmit() {
    this.service.createCar(this.Car, this.test);
    console.log('The return from createCar() was ' + status);
    this.wasSubmitted = true;
  }

  test() {

  }


}
