import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapModule } from './bootstrap/bootstrap.module';
import { FileUploaderModule } from './file-uploader/file-uploader.module';
import { FileUploaderService } from './file-uploader/file-uploader.service';
import { NivelRestClientService } from './nivel-restclient/nivel-rest-client.service';
import { CursoRestClientService } from './curso-restclient/curso-rest-client.service';
import { ProfesorRestClientService } from './profesor-restclient/profesor-rest-client.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoCursosComponent } from './catalogo-cursos/catalogo-cursos.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { CatalogoCursosModule } from './catalogo-cursos/catalogo-cursos.module';


const appRoutes: Routes = [
  { path: 'catalogo', component: CatalogoCursosComponent },
  { path: 'altaCurso', component: FileUploaderComponent },
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/altaCurso',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // para debug
    ),
    BrowserModule,
    AppRoutingModule,
    BootstrapModule,
    FileUploaderModule,
    HttpClientModule,
    CatalogoCursosModule
  ],
  providers: [FileUploaderService, NivelRestClientService, 
              CursoRestClientService, ProfesorRestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
