import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import { ShippingComponent } from './components/shipping/shipping.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    TopBarComponent,
    AppComponent,
    ProductListComponent,
    ProductComponent,
    ProductDetailComponent,
    CartComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
