import { Routes } from '@angular/router';
import { Books } from './components/books/books';
import { Quotes } from './components/quotes/quotes';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: Books, canActivate: [authGuard] },
  { path: 'quotes', component: Quotes, canActivate: [authGuard] },
  { path: 'login', component: Login },
  { path: 'register', component: Register }
];

