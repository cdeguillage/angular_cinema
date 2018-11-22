import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmdatasService {

  private films: Array<any>;

  constructor( public http: HttpClient ) {
    // this.films = [
    //   {
    //     id: 1,
    //     title: 'Les chatouilles',
    //     publish_date: '2018-11-14',
    //     url: 'http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/04/27/17/19/4063863.jpg',
    //     note: 4.4,
    //   },
    //   {
    //     id: 2,
    //     title: 'Yéti & compagnie',
    //     publish_date: '2018-10-17',
    //     url: 'http://fr.web.img6.acsta.net/r_1920_1080/pictures/18/07/24/10/49/2195759.jpg',
    //     note: 1.8,
    //   },
    //   {
    //     id: 5,
    //     title: 'Les chatouilles 3',
    //     publish_date: '2018-11-14',
    //     url: 'http://fr.web.img2.acsta.net/r_1920_1080/pictures/18/04/27/17/19/4063863.jpg',
    //     note: 3.1,
    //   },
    // ];

    this.http.get( 'localhost:3000/films' ).toPromise().then( data => this.films );

  }

  public getAll() {
    return this.films;
  }

  public add( film: any ) {
    this.films.push( film );
  }
}
