import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './component/home/home.component';
import { FilmsComponent } from './component/films/films.component';
import { DetailsComponent } from './component/details/details.component';
import { FilmajoutformComponent } from './forms/filmajoutform/filmajoutform.component';

import { FilmactiveDirective } from './directive/filmactive.directive';
import { StarPipe } from './pipe/star/star.pipe';

// ARRAY
import { FilmdatasService } from './service/filmdatas.service';
// HTTP
import { HttpGetDataService } from './service/httpgetdata.service';


const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'film/add', component: FilmajoutformComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [
    FilmsComponent,
    FilmactiveDirective,
    StarPipe,
    DetailsComponent,
    HomeComponent,
    FilmajoutformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(route),
    RouterModule.forChild(route),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    FilmdatasService,
    HttpGetDataService
  ]
})
export class CinemaModule { }
