import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: "", redirectTo: "product-list", pathMatch: "full" },
  { path: "product-list", component: ProductCardsComponent },
  { path: "cart", component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
