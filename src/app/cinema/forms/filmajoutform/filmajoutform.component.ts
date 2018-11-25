import { Component, OnInit } from '@angular/core';

// Structure des datas
import { FilmArray } from '../../service/datatype/filmarray';

// ARRAY
import { FilmdatasService } from '../../service/filmdatas.service';
// HTTP
import { HttpGetDataService } from '../../service/httpgetdata.service';


@Component({
  selector: 'app-filmajoutform',
  templateUrl: './filmajoutform.component.html',
  styleUrls: ['./filmajoutform.component.css']
})
export class FilmajoutformComponent implements OnInit {

  private filmajoutform: FilmArray;
  // ARRAY
  // private filmdatas: FilmdatasService;
  // HTTP
  private filmdatas: HttpGetDataService;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // Ajout d'un film dans la base de données (ARRAY ou HTTP)
    this.filmdatas.add( this.filmajoutform );
  }

  ajoutFilm() {
    // Meesage d'insertion d'un film dans la base de données
    alert('Le film "' + this.filmajoutform.title + '" a été ajouté !');
  }

}
