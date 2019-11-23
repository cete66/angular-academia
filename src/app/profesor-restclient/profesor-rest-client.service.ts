import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Profesor } from './profesor.model';


@Injectable({
  providedIn: 'root'
})
export class ProfesorRestClientService {

  academiaDefaultPort: Number = 7001;
  academiaRootUrl: String = "http://localhost:"+this.academiaDefaultPort+"/academia";
  nivelRestUrl: String = this.academiaRootUrl+"/profesor";
  httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client;
    
  }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  findNivelById(id: Number): Observable<Profesor> {
    return this.httpClient.get<Profesor>(this.nivelRestUrl+"/findById/"+id).pipe();
  }

  findAllProfesores(): Observable<Profesor> {
    return this.httpClient.get<Profesor>(this.nivelRestUrl+"/findAll").pipe();
  }
}
