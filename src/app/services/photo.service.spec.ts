import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have getPhotos function', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service.getPhotos).toBeTruthy();
  });

  it('should have getFavorites function', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service.getFavorites).toBeTruthy();
  });

});
