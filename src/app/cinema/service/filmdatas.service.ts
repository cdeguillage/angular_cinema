import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FilmArray } from './datatype/filmarray';
import { HttpGetDataService } from './httpgetdata.service';

@Injectable({
  providedIn: 'root'
})
export class FilmdatasService {

  private films: Array<FilmArray>;

  constructor( public http: HttpClient, public filmsJSON: HttpGetDataService ) {
  }

  ngOnInit() {
    // Loading films JSONServer (3000)
    // this.filmsJSON.getFilms();
  }

  public getAll() {
    return this.filmsJSON.getFilms();
  }

  public add( film: FilmArray ) {
    this.films.push( film );
  }
}
