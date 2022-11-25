import {Component, HostListener, OnInit} from '@angular/core';
import {IPhoto} from '../../interfaces/photo.interface';
import {StorageService} from '../../shared/services/storage.service';
import {PhotoService} from '../../services/photo.service';
import {Observable} from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  loading$: Observable<boolean>;
  photosData: IPhoto[] = [];
  favoritesArray:IPhoto[] = [];
  page = 1;
  itemsPerPage = 10;

  constructor(private photoService: PhotoService,
              private storageService: StorageService,

  ) {
    this.loading$ = this.photoService.photosLoading$;
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight - 1) {
      this.photoService.getPhotos(++this.page, this.itemsPerPage);
    }
  };

  ngOnInit(): void {
    this.photoService.photos$.pipe(untilDestroyed(this)).subscribe(result => {
      this.photosData = [...this.photosData, ...result];
      this.mapFavorites();
    });
    this.photoService.getPhotos(this.page, this.itemsPerPage);
    this.favoritesArray = this.photoService.getFavorites();
  }

  mapFavorites() {
    const favoritesArray = this.photoService.getFavorites();
    this.photosData = this.photosData.map(photo => {
      return {
        ...photo,
        isFavorite: favoritesArray.find((favorite: IPhoto) => favorite.id === photo.id),
      }
    });
  }

  addToFavorite(photo: IPhoto) {
    if (!photo.isFavorite) {
      const photoInfo = {...photo, isFavorite:true};
      this.favoritesArray.push(photo);
      this.storageService.saveData('favoritesArray', this.favoritesArray);
      this.mapFavorites();
    }

  }

}
