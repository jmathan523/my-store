import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { FormComponent } from './components/form/form.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent,
    CartComponent,
    CheckOutComponent,
    FormComponent,
    ConfirmationComponent,
    PagenotfoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
