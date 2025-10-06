import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: any[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.currentList.subscribe((res) => {
      if (res) {
        debugger;
        this.cartList.push(res);
      }
    })
  }

}
