import { Routes } from '@angular/router';
import { Books } from './components/books/books';
import { Quotes } from './components/quotes/quotes';
import { Login } from './components/login/login';
import { Register } from './components/register/register';


export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: Books },
  { path: 'quotes', component: Quotes },
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];


