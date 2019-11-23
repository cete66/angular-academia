import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpHeaders } from  '@angular/common/http';
import { map } from  'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { Curso } from '../curso-restclient/curso.model';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService {

  academiaDefaultPort: Number = 7001;
  academiaRootUrl: String = "http://localhost:"+this.academiaDefaultPort+"/academia";
  cursoRestUrl: String = this.academiaRootUrl+"/curso";
  httpClient: HttpClient;

  constructor(client: HttpClient) {
    this.httpClient = client; 
  }

  // Http Headers
  /*httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    }) 
  }*/

  public insertCursoAutoIdWithFile(form: FormGroup) {
    let url = this.cursoRestUrl+"/insertCursoAutoIdUploadFile";
    let curso:Curso = new Curso();
    //let fichero: any;
    curso.activo = form.get('activo').value;
    curso.horas = form.get('horas').value;
    curso.nivel = form.get('nivel').value;
    curso.profesor = form.get('profesor').value;
    curso.titulo = form.get('titulo').value;

    /*fichero = form.get('dataFile').value;*/

    let formdata: FormData = new FormData();

    formdata.append('curso',JSON.stringify(curso));
    formdata.append('file', form.get('dataFile').value);



    

    //let data = form.getRawValue();
        
    this.httpClient.post(url,  formdata)
    .subscribe(
      ok => console.log("ok: "+ok),
      ko => console.log("ko: "+ko)
    );
    
  }
}
