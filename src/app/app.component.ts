import { Component, OnInit } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { LoggerService } from 'my-logger';
import * as $ from 'jquery';
// import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent {
  // title = 'angular';
  // ngOnInit()
  // {
  //   $(document).ready(function(){
  //     alert("ok janu");
  //   });
  // }
// }


export class AppComponent{
  title = 'angular';

  constructor(private loggerService: LoggerService){
  this.loggerService.log("Hello world");
  }

}