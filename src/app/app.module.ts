import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CinemaModule } from './cinema/cinema.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

const route: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, CinemaModule, UserModule, RouterModule.forRoot( route ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

