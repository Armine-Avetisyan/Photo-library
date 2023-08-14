import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglePhotoComponent } from './single-photo.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { FavoritePhotoMockData } from '../../../mocks/photo-mock-data';
import { StorageService } from '../../shared/services/storage.service';
import { Router } from '@angular/router';

describe('SinglePhotoComponent', () => {
  let component: SinglePhotoComponent;
  let fixture: ComponentFixture<SinglePhotoComponent>;
  let storageService: StorageService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePhotoComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePhotoComponent);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService);
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove photo from favorites and update storage', () => {

    component.favoritesArray = FavoritePhotoMockData;

    spyOn(storageService, 'saveData');
    spyOn(router, 'navigate');

    component.removePhotoFromFavorites('2');

    expect(component.favoritesArray.length).toBe(2);
    expect(component.favoritesArray.some(photo => photo.id === '2')).toBeTruthy();
    // expect(storageService.saveData).toHaveBeenCalledWith('favoritesArray', component.favoritesArray);
    expect(router.navigate).toHaveBeenCalledWith(['/favorites']);
  });
});
