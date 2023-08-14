import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IPhoto} from '../../../interfaces/photo.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhotoCardComponent implements OnInit {
  @Input() photo!: IPhoto;
  @Input() path!: string;
  @Output() selected: EventEmitter<IPhoto> = new EventEmitter<IPhoto>();

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  onSelect(photo: IPhoto): void{
    if(this.path) {
      this.router.navigate([this.path,photo.id]);
    } else {
      this.selected.emit(photo);
    }
  }

}
