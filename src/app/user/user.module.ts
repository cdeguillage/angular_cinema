import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnexionComponent } from './component/connexion/connexion.component';
import { InscriptionComponent } from './component/inscription/inscription.component';
import { ConnectComponent } from './component/connect/connect.component';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
  { path: 'connect', component: ConnectComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
];

@NgModule({
  declarations: [ConnexionComponent, InscriptionComponent, ConnectComponent],
  imports: [
    CommonModule, RouterModule.forRoot( route )
  ]
})
export class UserModule { }
