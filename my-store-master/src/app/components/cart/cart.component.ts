import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cartItem: Cart;
  @Output() deleteItem = new EventEmitter();
  @Output() priceChange = new EventEmitter();
  count: number[] = [1, 2, 3, 4, 5];

  constructor(private cartService: CartService) {
    this.cartItem = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      count: 1,
    };
  }

  ngOnInit(): void {}

  onQtyChange(event: any) {
    this.cartItem.count = Number(event.target.value);
    this.cartService.addToCart(this.cartItem);
    this.priceChange.emit();
  }
}
