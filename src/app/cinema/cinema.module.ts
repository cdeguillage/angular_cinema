import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FilmsComponent } from './component/films/films.component';
import { FilmactiveDirective } from './directive/filmactive.directive';
import { StarPipe } from './pipe/star/star.pipe';
import { DetailsComponent } from './component/details/details.component';
import { HomeComponent } from './component/home/home.component';

import { FilmdatasService } from './service/filmdatas.service';

const route: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  declarations: [
    FilmsComponent,
    FilmactiveDirective,
    StarPipe,
    DetailsComponent,
    HomeComponent
  ],
    imports: [
      CommonModule, RouterModule.forRoot(route),
  ],
  providers: [
    FilmdatasService
  ]
})
export class CinemaModule { }
