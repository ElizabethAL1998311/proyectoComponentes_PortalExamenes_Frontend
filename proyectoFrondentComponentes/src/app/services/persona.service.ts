import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private httpClient:HttpClient){ }

  public añadirPersona(persona:any){
    return this.httpClient.post(`${baseUrl}/personas/`,persona);
  }
}
