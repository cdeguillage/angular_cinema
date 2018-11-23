import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { resolve } from 'url';

import { FilmArray } from './datatype/filmarray';

@Injectable({
    providedIn: 'root'
  })

export class HttpGetDataService {

    // Constantes
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    // Fichier JSON datas
    configUrl = '../assets/config.json';

    // Base de données - films
    apiRootData: string = 'http://localhost:3000/films';
    private films: Array<FilmArray>;

    // Base de données - users
    apiRootUsers: string = 'http://localhost:3000/users';


    constructor( public http: HttpClient, public resFilms: FilmArray ) {
        // Restitue la base de données "films" par API
        // Exemple d'URL personnalisé : let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    }

    public getFilms() {

        return this.http.get( this.apiRootData );

    }

}