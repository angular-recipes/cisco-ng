import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AddBookFormComponent } from './components/add-book-form/add-book-form.component';
import { TitlecaseDirective } from './directives/titlecase.directive';
import { HighRatedHasHighPriceDirective } from './directives/high-rated-has-high-price.directive';
import { LastNameFirstPipe } from './pipes/last-name-first.pipe';
import { BookItemComponent } from './components/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    AboutPageComponent,
    BookDetailsComponent,
    ShoppingCartComponent,
    AddBookFormComponent,
    TitlecaseDirective,
    HighRatedHasHighPriceDirective,
    LastNameFirstPipe,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
