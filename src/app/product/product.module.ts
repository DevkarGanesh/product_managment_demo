import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    ProductCardsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
