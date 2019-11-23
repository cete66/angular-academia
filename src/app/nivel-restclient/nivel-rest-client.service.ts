import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Nivel } from './nivel.model';

@Injectable({
  providedIn: 'root'
})
export class NivelRestClientService {

  academiaDefaultPort: Number = 7001;
  academiaRootUrl: String = "http://localhost:"+this.academiaDefaultPort+"/academia";
  nivelRestUrl: String = this.academiaRootUrl+"/nivel";
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

  findNivelById(id: Number): Observable<Nivel> {
    return this.httpClient.get<Nivel>(this.nivelRestUrl+"/findById/"+id).pipe();
  }

  findAllNiveles(): Observable<Nivel> {
    return this.httpClient.get<Nivel>(this.nivelRestUrl+"/findAll").pipe();
  }
}
