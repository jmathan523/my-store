import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart[] = [];

  constructor() {}

  // Add items to cart array and store it in localstorage
  addToCart(cartItem: Cart) {
    this.cart = this.getCartItems();
    // find product already exists in cart
    console.log(this.cart);
    let existingCartItem = this.cart.find((item) => item.id === cartItem.id);

    if (existingCartItem) {
      // update the existing cart item
      this.cart = this.cart.filter((item) => item.id !== cartItem.id);
      this.cart.unshift(cartItem);
      this.storeCartItems(this.cart);
    } else {
      this.cart.unshift(cartItem);
      this.storeCartItems(this.cart);
    }
  }

  // Store Cart item into the localstorage
  storeCartItems(cartItems: Cart[]) {
    localStorage.setItem('my_store_cart', JSON.stringify(cartItems));
  }

  // Get cart items from local storage
  getCartItems() {
    if (!localStorage.getItem('my_store_cart')) return [];

    //REFERENCE :: https://stackoverflow.com/a/43762443
    return JSON.parse(localStorage.getItem('my_store_cart') || '[]');
  }

  // remove the cart item from the cart array and update the localstorage
  removeCartItem(cartItem: Cart) {
    this.cart = this.getCartItems();
    const updatedCart = this.cart.filter((item) => item.id !== cartItem.id);
    this.storeCartItems(updatedCart);
    this.getSubTotal(updatedCart);
    return updatedCart;
  }

  // get the subtotal amount
  getSubTotal(cartItems: Cart[]) {
    return cartItems
      .reduce((acc, item) => acc + item.count * item.price, 0)
      .toFixed(2);
  }

  removeCartData() {
    localStorage.removeItem('my_store_cart');
  }
}
