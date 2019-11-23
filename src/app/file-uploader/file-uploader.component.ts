import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FileUploaderService } from './file-uploader.service';
import { NivelRestClientService } from '../nivel-restclient/nivel-rest-client.service';
import { ProfesorRestClientService } from '../profesor-restclient/profesor-rest-client.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  form: FormGroup;
  fileUploaderService: FileUploaderService;
  nivelRestService: NivelRestClientService;
  profesorRestService: ProfesorRestClientService;
  niveles: any = [];
  profesores: any = [];

  constructor(public fb: FormBuilder, fus: FileUploaderService, 
              nrs: NivelRestClientService, prs: ProfesorRestClientService) {
    this.nivelRestService = nrs;
    this.profesorRestService = prs;
    this.fileUploaderService = fus;

    this.form = this.fb.group({
      activo: [false],
      profesor: [0],
      titulo: [''],
      horas: [0],
      nivel: [0],
      dataFile: [null]
    });
    
  }

  ngOnInit() {
    this.selectNiveles();
    this.selectProfesores();
  }

  onChangeSelect(e) {
    console.log(e);
    this.form.get(e.target.id).setValue(e.target.value, {
       onlySelf: true
    })
  }

  processFile(event) {
    if (event.target.files.length > 0) {
      let newFile = event.target.files[0];
      this.form.patchValue({
        dataFile: newFile
      });
    }
    
    this.form.get('dataFile').updateValueAndValidity()
  }

  selectNiveles() {
   this.nivelRestService.findAllNiveles().subscribe((data: {}) => {
      this.niveles = data;
    });
    /*nivelesObs.subscribe((data: Nivel[]) => {
            this.niveles = data;
        });*/
  }

  selectProfesores() {
    this.profesorRestService.findAllProfesores().subscribe((data: {}) => {
      this.profesores = data;
    });
  }

  submitForm() {
    this.fileUploaderService.insertCursoAutoIdWithFile(this.form);
  }

}
