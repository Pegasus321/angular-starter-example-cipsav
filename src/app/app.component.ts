import { NAMED_ENTITIES } from '@angular/compiler';
import { Component } from '@angular/core';
import { Car } from './cars';
import { TransportationService } from './transportation.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cars: Car[];
  constructor(private transportationService: TransportationService) {
    this.cars = this.transportationService.getCars();
  }
  //now instead of here we import it from transportaion.service.ts
  // subaru: Car = { make: 'Subaru', model: 'Outback', miles: 58232 };
  // honda: Car = { make: 'Honda', model: 'Accord', miles: 39393 };
  // bmw: Car = { make: 'BMW', model: 'X3', miles: 4400 };
  // cars: Car[] = [this.subaru, this.honda, this.bmw];
  // prefix = 'I am a';
  // name = 'star student';
  // colors: string[] = ['red', 'blue', 'green', 'purple'];

  // speak() {
  //   const statement = this.prefix + this.name;
  //   return statement;
  // }
}
