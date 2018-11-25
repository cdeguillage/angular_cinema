import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Structure des données
import { FilmArray } from './datatype/filmarray';
import { FilmInterface } from './datatype/filminterface';
import { forEach } from '@angular/router/src/utils/collection';
import { resolve } from 'url';

@Injectable({
    providedIn: 'root'
  })

export class HttpGetDataService {

    // Serveur JSON
    private apiRoot: string = 'http://localhost:3000';

    // Base de données - films
    private apiRootFilms: string = this.apiRoot + '/films';
    public films: Array<FilmArray>;
    public film: FilmArray;

    // Base de données - users
    private apiRootUsers: string = this.apiRoot + '/users';
    // private users: Array<UserArray>;

    constructor( private http: HttpClient ) {
    }
    
    ngOnInit() {
        // Restitue la base de données "films" par API
        // Exemple d'URL personnalisé : let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
        this.http.get<FilmInterface[]>( this.apiRootFilms )
            .subscribe( data => {
                this.films = data;
                for(let film of this.films) {
                    if (film.id === 1) {
                        console.log('-3---------------------');
                        this.film = film;
                        console.log(film);
                        console.log(this.film);
                        console.log('-4---------------------');
                    }
                }
                console.log(this.film);
            }
        );
    }
    
    public getFilms() {
        console.log('-1---------------------');
        console.log(' --> ' + this.film);
        console.log('-2---------------------');
        return this.films;
    }

    public add( film: FilmInterface ) {
        this.films.push( film );
    }

}