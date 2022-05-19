export class Cart {
  id: number;
  name: string;
  price: number;
  url: string;
  count: number;

  constructor() {
    this.id = 1;
    this.name = '';
    this.price = 0.0;
    this.url = '';
    this.count = 0;
  }
}
