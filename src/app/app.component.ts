import { Component, OnInit } from '@angular/core';

import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NASA Challenge';
  
 public asteroid:any [];
  public imgOfTheDay: string = '';
  public service: NasaService;
  constructor( param_service:NasaService ){
    this.service  =  param_service;
}

public  ngOnInit():void{
    this.service.getImageOfTheDay().subscribe(
        (param_msg:any) => {
           this.imgOfTheDay =  param_msg.url   
      }
    )
    this.service.getObjectOfTheDay().subscribe(
      (param_msg:any) => {
        //this.asteroid = param_msg
        //this.asteroid=(param_msg.near_earth_objects)
        this.asteroid=(param_msg.near_earth_objects)
      }
    )
  
  };

}

