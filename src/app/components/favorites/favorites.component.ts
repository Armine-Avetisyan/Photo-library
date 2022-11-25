import { Component, OnInit } from '@angular/core';
import {IPhoto} from '../../interfaces/photo.interface';
import {PhotoService} from '../../services/photo.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoriteData:IPhoto[] = []
  constructor( private photoService: PhotoService) { }

  ngOnInit(): void {
    this.favoriteData = this.photoService.getFavorites();
  }

}
