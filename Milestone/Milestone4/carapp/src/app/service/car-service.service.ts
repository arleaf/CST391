import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Car } from '../models/cars';

@Injectable({ providedIn: 'root' })
export class CarServiceService {

    private host = "http://localhost:3000"
    //private readonly artists: Artist[] = [];
    //albums: Album[] = exampledata;

    constructor(private http: HttpClient) {

    }
    // constructor() {
    //   this.createArtists();
    //   this.createAlbums();
    // }


    public getCars(callback: (cars: Car[]) => void): void {
        this.http.get<Car[]>(this.host + "/cars").subscribe((cars: Car[]) => {
            callback(cars);
        });
    }



    public createCar(car: Car, callback: () => void): void {
        this.http.post<Car>(this.host + "/cars", car).subscribe((data) => {
            callback();
        });
    }

    public updateCar(car: Car, callback: () => void): void {
        this.http.put<Car>(this.host + "/cars", car).subscribe((data) => {
            callback();
        });
    }

    public deleteCar(id: number, callback: () => void): void {
        this.http.delete(this.host + "/cars/" + id).subscribe((data) => {
            callback();
        });
    }
}
