import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from "./file-uploader.component";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [FileUploaderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [FileUploaderComponent]
})
export class FileUploaderModule { }
