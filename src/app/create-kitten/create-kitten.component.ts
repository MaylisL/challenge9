import { Component, EventEmitter, Output } from '@angular/core';
import { Kitten } from '../models/kitten.models';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {
  @Output() sendKittenToParent: EventEmitter<Kitten> = new EventEmitter();
  kitten: Kitten = new Kitten("", "", "", "");
 
  createKitten() {
    this.sendKittenToParent.emit(this.kitten);
    //reset the form to avoid modifying the same object again and again
    this.kitten = new Kitten("", "", "", "");
    
  }


}
