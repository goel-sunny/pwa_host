import { Component } from '@angular/core';
import { FakeReqService } from './service/fake-req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fleet Management System';
  
    constructor(private fs: FakeReqService){
    }

   setErrorCode(){
    this.fs.getRequest().subscribe(
      (response) => {},
      (error) => {
         // here we are pushing the event and some error code variable 
        (<any>window).dataLayer.push({'event': "APIFail","errorCode":error.status} );  
       }
     );
    }


    triggerClick(){
       // whatever functionality it have . 
    }

    setClickCount(){
      let dataLayer = (<any>window).dataLayer; 
       let counter =0 , flag = false ;
      dataLayer.forEach(element => {
        if(element.hasOwnProperty('counter')){
           counter =  element.counter; 
        }
     });
     
     counter++;
    // here we are pushing the event and some error code variable 
   (<any>window).dataLayer.push({'event': "ClickCounter","counter":counter });    
  }
}

