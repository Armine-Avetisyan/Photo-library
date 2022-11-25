import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import components from './components';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
  ],
  exports: components,
})
export class SharedModule { }
