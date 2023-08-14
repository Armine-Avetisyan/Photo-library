import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  constructor( private pouter: Router) { }

  onClick() {
    this.pouter.navigate([''])
  }
}