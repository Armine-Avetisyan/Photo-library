import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent, PhotosComponent, ErrorPageComponent} from './components'

const routes: Routes = [
  {path: '', component: PhotosComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'photos/:id', loadChildren: () => import('./components/single-photo/single-photo.module').then(m =>m.SinglePhotoModule)},
  {path: '**', component: ErrorPageComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
