import { Component, inject, OnInit } from '@angular/core';
import { CardComponent } from '../../card/card.component';
import { ProductsService } from '../../../shared/service/products.service';
import { Product } from '../../../shared/interface/product.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  #productService = inject(ProductsService);
  public productList: Product[] = [];
  public categorys: string[] = [];
  

  ngOnInit(): void {
    this.productList = this.#productService.products;
    this.categorys = this.#productService.getCategorys(); 
  }
  
  getProductsForSubCategory(category: string, subCategory: string): Product[] {
    return this.productList.filter((p) => p.subcategory === subCategory && p.category === category);
  }

  getUniqueSubCategories(category: string): string[] {
    const subCategories = this.productList
      .filter((p) => p.category === category)
      .map((p) => p.subcategory);
    return Array.from(new Set(subCategories));
  }
}
