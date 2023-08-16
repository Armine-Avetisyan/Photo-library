import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { PhotoService } from '../../services/photo.service';
import { StorageService } from '../../shared/services/storage.service';
import { IPhoto } from '../../interfaces/photo.interface';
import { PhotoMockData } from '../../../mocks/photo-mock-data';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;
  let photoService: PhotoService;
  let storageService: StorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosComponent ],
      imports: [
        HttpClientTestingModule,
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      providers: [PhotoService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    photoService = jasmine.createSpyObj('PhotoService', ['getPhotos']);
    storageService = TestBed.inject(StorageService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call photoService.getPhotos when scroll conditions are met', () => {
  //   fixture.detectChanges();
  //
  //   const inputEl = fixture.nativeElement.querySelector('.img-container');
  //   const mockEvent = {
  //     target: {
  //       offsetHeight: 200,
  //       scrollTop: 300,
  //       scrollHeight: 1000,
  //     },
  //   };
  //
  //   // const spy = spyOn(photoService, 'getPhotos');
  //   const event = new Event('scroll');
  //
  //   spyOn(event, 'preventDefault').and.callThrough()
  //   const spy = spyOn(component, 'onScroll').and.callThrough()
  //   inputEl.dispatchEvent(event, mockEvent)
  //   fixture.detectChanges();
  //
  //
  //   expect(spy).toHaveBeenCalled();
  // });

  it('should add a photo to favorites and update storage', () => {
    const mockPhoto: IPhoto = PhotoMockData[1];
    spyOn(storageService, 'saveData');
    spyOn(component, 'mapFavorites');

    component.addToFavorite(mockPhoto);

    expect(component.favoritesArray).toContain(mockPhoto);
    expect(storageService.saveData).toHaveBeenCalledWith('favoritesArray', component.favoritesArray);
    expect(component.mapFavorites).toHaveBeenCalled();
  });

  it('should not add a photo to favorites if already a favorite', () => {
    const mockPhoto: IPhoto = PhotoMockData[0];
    spyOn(storageService, 'saveData');
    spyOn(component, 'mapFavorites');

    component.addToFavorite(mockPhoto);

    expect(component.favoritesArray).not.toContain(mockPhoto);
    expect(storageService.saveData).not.toHaveBeenCalled();
    expect(component.mapFavorites).not.toHaveBeenCalled();
  });

  it('should return the photo id as the track-by value', () => {
    const mockPhoto: IPhoto = PhotoMockData[0];
    const result = component.photoTrackBy(0, mockPhoto);

    expect(result).toBe(mockPhoto.id);
  });
});
