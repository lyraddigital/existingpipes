import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  standardDate = new Date(2017, 2, 4, 11, 59, 5, 100);
  upperCaseMessage = "uppercase";
  lowerCaseMessage = "LOWERCASE";
  money = 2500.50; 
  PI = 3.141592;
  tax = 0.375;
  details = { "firstName": "Daryl", "lastName": "Duckmanton"};
  name = "Daryl Duckmanton";

  get formattedDate() {
    return "dd/MM/yyyy";
  }
}
