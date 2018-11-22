import { Component, OnInit } from '@angular/core';
import { FilmAjoutForm } from './filmajout';
import { FilmdatasService } from '../../service/filmdatas.service';

@Component({
  selector: 'app-filmajoutform',
  templateUrl: './filmajoutform.component.html',
  styleUrls: ['./filmajoutform.component.css']
})
export class FilmajoutformComponent implements OnInit {

  private filmajoutform: FilmAjoutForm = new FilmAjoutForm();
  private filmdatas: FilmdatasService = new FilmdatasService();

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
