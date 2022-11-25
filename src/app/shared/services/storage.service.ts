import { Injectable } from '@angular/core';
import {IPhoto} from '../../interfaces/photo.interface';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  favoriteStore$: BehaviorSubject<{}> = new BehaviorSubject<{}>([])
  favoritesArray: IPhoto[] = []

  constructor() { }

  saveData(key: string, data: IPhoto[] ) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getData(key: string) {
    return localStorage.getItem(key)
  }

  removeData(key: string) {
    localStorage.removeItem(key);
  }
}
