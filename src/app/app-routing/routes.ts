import { Routes } from '@angular/router';

import { ListeComponent } from '../liste/liste.component';
import { CarteComponent } from '../carte/carte.component';


export const routes: Routes = [
  { path: 'liste',  component: ListeComponent },
  { path: 'carte',     component: CarteComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];