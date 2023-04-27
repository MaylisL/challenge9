import { Component } from '@angular/core';
import { Kitten } from './models/kitten.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge9';
  kittenList: Kitten[] = [
    new Kitten("Tabata", "gouttière", "12/04/94", "https://resize.prod.docfr.doc-media.fr/rcrop/1200,902,center-middle/ext/eac4ff34/content/2022/7/23/chat-moche-atchoum-c904d30c985969a7.jpeg"),
    new Kitten("Tipsy", "street cat", "12/05/2021", "https://i.pinimg.com/originals/86/42/71/864271ce2a1d06f04f20fc7c68208dd5.jpg"),
    new Kitten("Turbo", "Bengal", "10/02/2022", "https://preview.redd.it/realistic-photo-of-the-worlds-ugliest-cat-detailed-v0-k1rk1dkjw3v91.jpg?width=640&crop=smart&auto=webp&s=6532de04f7ad1400f867886b45ee01f0b7519500")
  ];
  adoptedKittenToUserArr: Kitten[] = [];


  onReceiveNewKitten(newKitten: Kitten) {
    this.kittenList.push(newKitten)
    console.log(this.kittenList)
  }

  onReceiveAdoptedKittenFromList(adoptedKittenToUser: Kitten) {
    this.adoptedKittenToUserArr.push(adoptedKittenToUser);
    // filter
     this.kittenList = this.kittenList.filter((kitten) => {
      return kitten.name !== adoptedKittenToUser.name 
      && kitten.birthdate !== adoptedKittenToUser.birthdate
    }) 

   /*  // splice
    this.kittenList.splice(this.kittenList.indexOf(adoptedKittenToUser), 1);
    console.log(this.kittenList)
    console.log(this.adoptedKittenToUserArr); */

    // findIndex
    //ça trouve l'index de l'objet rrecherché dans un tableau en fonction 
    //de la condition(fonction) passé àprès l'arrow
    //
   /*  console.log(this.kittenList.findIndex( (kitten) => kitten === adoptedKittenToUser)); */
    

    
  }
}
