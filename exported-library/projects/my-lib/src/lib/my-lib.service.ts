import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLibService {

  constructor() { }


  boringMethod() {
    console.log('it worked!')
  }
}
