import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FilmArray } from '../../service/datatype/filmarray';
import { FilmdatasService } from '../../service/filmdatas.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {

  private films: Array<FilmArray>;

  constructor( private router: Router, private filmdatas: FilmdatasService ) {
  }

  ngOnInit() {
    this.films = this.filmdatas.getAll();
  }

  alerttitle(title: string) {
    alert(title);
  }

  goDetails(id: number) {
    this.router.navigate( ['/details', id] );
  }


}
