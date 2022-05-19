import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  // get product from parent component
  @Input() product: Product;
  @Output() addToCart = new EventEmitter();
  count: number[] = [1, 2, 3, 4, 5];
  productCount: number = 1;
  cartItem: Cart;

  constructor(private cartService: CartService) {
    this.product = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      description: '',
    };
    this.cartItem = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      count: 1,
    };
  }

  ngOnInit(): void {}

  // Get the value from select element
  selectedVal(event: any) {
    this.productCount = event.target.value;
  }

  // add to cart using Cart services
  pushToCart(product: Product) {
    this.cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      count: Number(this.productCount),
    };
    this.cartService.addToCart(this.cartItem);
    window.alert(`${product.name} is added to the cart.`);
  }
}
