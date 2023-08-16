import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../shared/services/storage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPhoto} from '../../interfaces/photo.interface';
import {PhotoService} from '../../services/photo.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrls: ['./single-photo.component.scss']
})
export class SinglePhotoComponent implements OnInit {
  photoId: string | null= '';
  singlePhoto!: IPhoto;
  favoritesArray: IPhoto[] = [];

  constructor(private storageService: StorageService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private photoService: PhotoService
  ) { }

  ngOnInit(): void {
    this.getSinglePhoto();
  }

  getSinglePhoto() {
    this.activatedRoute.paramMap.pipe(untilDestroyed(this)).subscribe(param => {
      this.photoId = param.get('id');
      this.favoritesArray = this.photoService.getFavorites();
      this.singlePhoto = this.favoritesArray.find(photo => photo.id  == this.photoId) as any;
    });
  }

  removePhotoFromFavorites(id: string) {
    let newFavoritesArray = this.favoritesArray.filter(photo => photo.id !== id);
    this.storageService.saveData('favoritesArray', newFavoritesArray);
    this.router.navigate(['/favorites']);
  }
}
