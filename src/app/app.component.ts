import { NAMED_ENTITIES } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  prefix = 'I am a';
  name = 'star student';

  speak() {
    const statement = this.prefix + this.name;
    return statement;
  }
}
