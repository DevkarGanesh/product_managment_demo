import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-cards',
  templateUrl: './product-cards.component.html',
  styleUrls: ['./product-cards.component.css']
})
export class ProductCardsComponent implements OnInit {

  productList: any[] = [];
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts() {
    this.productService.fetchProducts().subscribe({
      next: (data) => {
        console.log(data);
        this.productList = data;
      }, error: (err) => {
        console.error(err);
      }
    })
  }

  addToCart(product: any) {
    this.productService.changeCart(product);
  }


  goToCart() {
    this.router.navigateByUrl("/products/cart");
  }

}
