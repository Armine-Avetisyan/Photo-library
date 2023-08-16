import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCardComponent } from './photo-card.component';
import { PhotoMockData } from '../../../../mocks/photo-mock-data';
import { IPhoto } from '../../../interfaces/photo.interface';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

describe('PhotoCardComponent', () => {
  let component: PhotoCardComponent;
  let fixture: ComponentFixture<PhotoCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the path with photo id if path is provided', () => {
    const photo: IPhoto = PhotoMockData[0]
    component.path = 'photos'; // Set the path
    const navigateSpy = spyOn(router, 'navigate');

    component.onSelect(photo);

    expect(navigateSpy).toHaveBeenCalledWith(['photos', photo.id]);
  });

  it('should emit selected event if path is not provided', () => {
    const photo: IPhoto = PhotoMockData[0]
    component.path = '';
    const selectedEmitter: EventEmitter<IPhoto> = component.selected as EventEmitter<IPhoto>;
    const emitSpy = spyOn(selectedEmitter, 'emit');

    component.onSelect(photo);

    expect(emitSpy).toHaveBeenCalledWith(photo);
  });

});
