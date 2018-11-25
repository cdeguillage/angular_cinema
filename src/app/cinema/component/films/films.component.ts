import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Structure des données
import { FilmArray } from '../../service/datatype/filmarray';
import { FilmInterface } from '../../service/datatype/filminterface';
// ARRAY
import { FilmdatasService } from '../../service/filmdatas.service';
// HTTP
import { HttpGetDataService } from '../../service/httpgetdata.service';


@Component({
  selector: 'app-movie-list',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {

  private films: Array<FilmInterface>;

  constructor( private router: Router, private filmdatasarray: FilmdatasService, private filmdatashttp: HttpGetDataService ) {
  }

  ngOnInit() {
    // Récupération de la liste des films
    // this.films = this.filmdatasarray.getFilms();
    this.films = this.filmdatashttp.getFilms();
    console.log(this.films.length);
  }

  alerttitle(title: string) {
    alert(title);
  }

  goDetails(id: number) {
    this.router.navigate( ['/details', id] );
  }


}
