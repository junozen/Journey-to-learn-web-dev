import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }

}
