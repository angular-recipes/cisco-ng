import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "home", component: BookListComponent},
  {path: "about", component: AboutPageComponent},
  {path: "book-details/:bookId", component: BookDetailsComponent},
  {path: "cart", component: ShoppingCartComponent},
  {path: "add-book", component: AddBookFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
