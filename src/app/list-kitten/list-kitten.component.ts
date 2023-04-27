import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Kitten } from '../models/kitten.models';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {
  @Input() kittenListChild: Kitten[] = [];
  @Output()  adoptedKittenToSendToApp: EventEmitter<Kitten> = new EventEmitter();

 
  receivedAdoptedKittenFromCard(adoptedKittenFromCard: Kitten) {
    this.adoptedKittenToSendToApp.emit(adoptedKittenFromCard)
  }

 
}
