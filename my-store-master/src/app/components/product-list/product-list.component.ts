import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productCount: number = 1;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Subscribe to the observable which return stream of data
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }
}
