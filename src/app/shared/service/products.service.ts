import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';
import productsData from '../../../assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products: Product[] = productsData;
  #categorys: string[] = [];
  
  getCategorys() {
    const categorySet = new Set<string>(this.products.map((p) => p.category));
    this.#categorys = Array.from(categorySet);
    return this.#categorys;
  }
}
