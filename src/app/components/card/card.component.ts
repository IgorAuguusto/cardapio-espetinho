import { Product } from './../../shared/interface/product.interface';
import { Component, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public product = input.required<Product>();  
}
