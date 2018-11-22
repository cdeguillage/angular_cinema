import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(value: any): string {

    let displayStar = '';
    value = Math.round( value * 10) / 10;  // Arrondi
    for (let _i = 0; _i < 5; _i++) {
      if (_i < value) {
        if ( _i < Math.round( value )) {
          displayStar += '<i class="fas fa-star"></i>';
        } else {
          displayStar += '<i class="fas fa-star-half-alt"></i>';
        }
      } else {
        displayStar += '<i class="far fa-star"></i>';
      }
    }
    return displayStar;

  }

}
