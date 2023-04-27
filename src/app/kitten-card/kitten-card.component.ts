import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kitten } from '../models/kitten.models';


@Component({
  selector: 'app-kitten-card',
  templateUrl: './kitten-card.component.html',
  styleUrls: ['./kitten-card.component.css']
})
export class KittenCardComponent {
  @Input() kittenChild!: Kitten; // le ! signifie l'info n'est pas encoree là mais le sera
  @Output() sendAdoptedKittenToList: EventEmitter<Kitten> = new EventEmitter();
  

  AddToUserkitten() {
    this.sendAdoptedKittenToList.emit(this.kittenChild)
  }
}
