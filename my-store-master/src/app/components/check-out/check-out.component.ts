import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ShippingService } from 'src/app/services/shipping.service';
import { Cart } from 'src/app/models/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css'],
})
export class CheckOutComponent implements OnInit {
  cartItems: Cart[] = [];
  subTotal: string = '';

  constructor(
    private cartService: CartService,
    private shippingService: ShippingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.subTotal = this.cartService.getSubTotal(this.cartItems);
  }

  //delete the cart item from cart
  deleteCartItem(cartItem: Cart) {
    let confirm = window.confirm(`Are you sure to remove: ${cartItem.name}?`);
    if (!confirm) return;
    this.cartItems = this.cartService.removeCartItem(cartItem);
    this.subTotal = this.cartService.getSubTotal(this.cartItems);
  }

  // update the subtotal
  updateTotalPrice() {
    this.subTotal = this.cartService.getSubTotal(this.cartItems);
  }

  // get the product mame to pass it to confirmation screen
  getName(name: string) {
    this.shippingService.onSubmit(name, this.subTotal);
    this.router.navigate(['/confirmation']);
    this.cartService.removeCartData();
  }
}
