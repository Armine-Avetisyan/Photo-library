import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPhoto} from '../interfaces/photo.interface';
import {CONSTANTS} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class PhotoDataService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>(CONSTANTS.PHOTOS_API)
  }
}
