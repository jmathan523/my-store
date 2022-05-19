import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  name: string = '';
  price: string = '';
  constructor() {}

  onSubmit(name: string, price: string) {
    this.name = name;
    this.price = price;
  }

  getShippingDetails() {
    return {
      name: this.name,
      price: this.price,
    };
  }
}
