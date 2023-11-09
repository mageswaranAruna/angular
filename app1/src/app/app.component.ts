import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

name: string = '<Maggi>';
age: number = 34
msg: string = 'Hello Welcome to Angular Framework';

handleSubmitBtn() {

  this.name = 'Smith'
  this.age = 45
}
}