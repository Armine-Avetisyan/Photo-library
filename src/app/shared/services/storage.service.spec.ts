import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import { FavoritePhotoMockData } from '../../../mocks/photo-mock-data';
import { IPhoto } from '../../interfaces/photo.interface';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save data to localStorage', () => {
    const key = 'testKey';
    const data: IPhoto[] = FavoritePhotoMockData;
    spyOn(localStorage, 'setItem');

    service.saveData(key, data);

    expect(localStorage.setItem).toHaveBeenCalledWith(key, JSON.stringify(data));
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  it('should remove data from localStorage', () => {
    const key = 'testKey';
    spyOn(localStorage, 'removeItem');

    service.removeData(key);

    expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1);
  });
});
