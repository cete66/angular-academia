import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CatalogoCursosComponent } from './catalogo-cursos.component';



@NgModule({
  declarations: [CatalogoCursosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [CatalogoCursosComponent]
})
export class CatalogoCursosModule { }
