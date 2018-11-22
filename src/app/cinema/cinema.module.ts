import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FilmsComponent } from './component/films/films.component';
import { FilmactiveDirective } from './directive/filmactive.directive';
import { StarPipe } from './pipe/star/star.pipe';
import { DetailsComponent } from './component/details/details.component';
import { HomeComponent } from './component/home/home.component';

import { FilmdatasService } from './service/filmdatas.service';
import { FilmajoutformComponent } from './forms/filmajoutform/filmajoutform.component';

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
    FilmdatasService
  ]
})
export class CinemaModule { }
