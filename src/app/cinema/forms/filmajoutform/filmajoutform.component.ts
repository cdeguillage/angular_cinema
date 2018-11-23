import { Component, OnInit } from '@angular/core';
import { FilmArray } from '../../service/datatype/filmarray';
import { FilmdatasService } from '../../service/filmdatas.service';

// import { HttpGetDataService } from '../../service/httpgetdata.service';


@Component({
  selector: 'app-filmajoutform',
  templateUrl: './filmajoutform.component.html',
  styleUrls: ['./filmajoutform.component.css']
})
export class FilmajoutformComponent implements OnInit {

  private filmajoutform: FilmArray;
  private filmdatas: FilmdatasService;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.filmdatas.add( this.filmajoutform );
  }

  ajoutFilm() {
    alert('Le film "' + this.filmajoutform.title + '" a été ajouté !');
  }

}
