import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SinglePhotoComponent} from "./single-photo.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: SinglePhotoComponent}
]

@NgModule({
  declarations: [
    SinglePhotoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [SinglePhotoComponent]
})
export class SinglePhotoModule { }
