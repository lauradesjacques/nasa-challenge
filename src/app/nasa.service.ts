import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaService {
 service: HttpClient;
  constructor(param_service:HttpClient) { 
    this.service = param_service;
  }
public getImageOfTheDay(): Observable<any> {
  const  obs1:Observable<any> = this.service.get("https://api.nasa.gov/planetary/apod? api_key = fi0dpvhI6uhAgBTaOWMLWNYq0ObnVuEgULhZJLJh");
  const  treatment  = ( param_data:any) => {
      return  param_data as any;
};
return  obs1.pipe( map( treatment) );
}
}
