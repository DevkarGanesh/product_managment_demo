import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _cartList = new BehaviorSubject<any>([]);
  currentList = this._cartList.asObservable();

  constructor(private http: HttpClient) { }


  changeCart(obj: any) {
    this._cartList.next(obj)
  }

  fetchProducts() {
    return this.http.get<any>("https://fakestoreapi.com/products");
  }
}
