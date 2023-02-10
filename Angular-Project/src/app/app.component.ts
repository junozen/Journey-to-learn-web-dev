import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todaydate: any;

  constructor ( private myservice: MyserviceService ) {}
  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();

  }

  title = 'Welcome to Angular';

  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  isAvailable = true;

  simplePipeData = "I hope you are having a good day"

  setTrue(){
    console.log("The value is now set to True!")
  }
  setFalse(){
    console.log("The value is now set to False!")
  }

  firstFeatureSet = {
    heading: "Feature One",
    body: "Some small details for the first feature presented here."
  }

  secondFeatureSet = {
    heading: "Feature Two",
    body: "Some small details for the second feature presented here."
  }

  thirdFeatureSet = {
    heading: "Feature Three",
    body: "Some small details for the third feature presented here."
  }

  fourthFeatureSet = {
    heading: "Feature Four",
    body: "Some small details for the fourth feature presented here."
  }

}
