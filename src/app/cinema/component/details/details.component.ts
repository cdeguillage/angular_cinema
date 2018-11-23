import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FilmdatasService } from '../../service/filmdatas.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private id: number;
  private films: Array<any>;

  constructor(private route: ActivatedRoute, private filmdatas: FilmdatasService ) {
    // this.films = this.filmdatas.getAll();
    this.id = route.snapshot.params.id;
  }

  ngOnInit() {
    // for ( let film of this.films ) {
    //   if ( film.id === this.id ) {
    //     this.film = film;
    //   }
    // }
  }

}
