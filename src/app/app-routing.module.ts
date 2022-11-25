import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SinglePhotoComponent, FavoritesComponent, PhotosComponent} from './components'

const routes: Routes = [
  {path: '', component: PhotosComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'photos/:id', component: SinglePhotoComponent}
  // {path: '**', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
