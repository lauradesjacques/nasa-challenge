import { Component, OnInit } from '@angular/core';

import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nasaChallenge';

  public imgOfTheDay: string = '';
  public service: NasaService;
  constructor( param_service:NasaService ){
    this.service  =  param_service;
}

public  ngOnInit():void{
    this.service.getImageOfTheDay().subscribe(
        (param_msg:string) => {
            this.imgOfTheDay =  param_msg;
        }
    )};
}

