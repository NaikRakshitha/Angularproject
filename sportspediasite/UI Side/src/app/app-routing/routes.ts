import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { CricketComponent } from '../cricket/cricket.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup',  component: SignupComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'cricket',  component: CricketComponent },
  { path: '', redirectTo: '/cricket', pathMatch: 'full' }
  
];