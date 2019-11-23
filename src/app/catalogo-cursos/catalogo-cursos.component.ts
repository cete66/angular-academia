import { Component, OnInit } from '@angular/core';
import { CursoRestClientService } from '../curso-restclient/curso-rest-client.service';

@Component({
  selector: 'app-catalogo-cursos',
  templateUrl: './catalogo-cursos.component.html',
  styleUrls: ['./catalogo-cursos.component.css']
})
export class CatalogoCursosComponent implements OnInit {

  cursoRestService: CursoRestClientService;

  /**
   * fijarme en los requisitos a ver que modulos-componentes utilizar para:
   * paginacion y ordenacion
   */
  constructor() { }

  ngOnInit() {
  }

}
