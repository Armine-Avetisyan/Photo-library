import { Injectable } from '@angular/core';
import {BehaviorSubject,  Observable} from 'rxjs';
import {map, delay, finalize,} from 'rxjs/operators';
import {PhotoDataService} from './photo-data.service';
import {IPhoto} from '../interfaces/photo.interface';
import {StorageService} from '../shared/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photosLoading$: Observable<boolean>;
  photos$: Observable<Array<IPhoto>>;
  private photosLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private photos: BehaviorSubject<Array<IPhoto>> = new BehaviorSubject<Array<IPhoto>>([]);

  constructor(private photoDataService: PhotoDataService,
              private storageService: StorageService
              ) {
    this.photosLoading$ = this.photosLoading.asObservable();
    this.photos$ = this.photos.asObservable();
  }

  getPhotos(page: number, itemsPerPage: number): void {
    this.photosLoading.next(true);
    this.photoDataService.getPhotos().pipe(
      delay(500),
      map(photos => {
        const startFrom = page === 1 ? 0 : --page*itemsPerPage;
        return photos.slice(startFrom, startFrom+itemsPerPage);
      }),
      finalize(() => this.photosLoading.next(false))
    ).subscribe(result => this.photos.next(result))
  }

  getFavorites() {
    return JSON.parse(this.storageService.getData('favoritesArray') as any);
  }
}
