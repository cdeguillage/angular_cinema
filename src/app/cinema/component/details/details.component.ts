import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Structure des datas
import { FilmArray } from '../../service/datatype/filmarray';
// ARRAY
import { FilmdatasService } from '../../service/filmdatas.service';
// HTTP
import { HttpGetDataService } from '../../service/httpgetdata.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private id: number;
  private films: Array<FilmArray>;
  private film: FilmArray;

  constructor( private route: ActivatedRoute, private filmsdata: FilmdatasService ) {

    ////////////////////// ARRAY ////////////////////////
    // On récupére la liste des films (Array)
    this.films = this.filmsdata.getFilms();

    // On récupére l'ID du film à afficher
    this.id = route.snapshot.params.id;

    /////////////////////// HTTP ////////////////////////

  }

  ngOnInit() {

    ////////////////// ARRAY / HTTP /////////////////////
    // On recherche l'ID qui va permettre d'afficher notre film
    for ( let film of this.films ) {
      if ( film.id == this.id ) {
        // On associe le film qui a été trouvé pour affichage
        this.film = film;
        // Fin de la recherche prématuré si trouvé (performance)
        break;
      }
    }

  }

}
