import { Injectable } from '@angular/core';
import { Car } from './cars';

@Injectable({
  providedIn: 'root',
})
export class TransportationService {
  // new code
  subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };

  cars: Car[] = [this.subaru, this.honda, this.bmw];

  constructor() {}

  addCar(car: Car) {
    this.cars.push(car);
  }

  // new code
  getCars() {
    return this.cars;
  }
}

new