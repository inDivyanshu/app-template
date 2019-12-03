import { Injectable } from '@angular/core';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class SessionGeneratorService {
  constructor() { }
randomText="QWERTYUIOPASDFGHJKLZXCVBNM1234567890asdfghjklqwertyuiopzxcvbnm";
session:string=''

getSessionGenerator(){
  for(let i=0;i<7;i++){
      this.session=this.session+this.randomText.charAt(Math.round(Math.random()*62))
  }
}
getTimeStamp(){
  return moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
}

}
