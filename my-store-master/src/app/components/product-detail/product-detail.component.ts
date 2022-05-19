import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  cartItem: Cart;
  count: number[] = [1, 2, 3, 4, 5];
  productCount: number = 1;
  //Emitting the event / pass the data to parent component
  @Output() onQtyChange = new EventEmitter();
  @Output() addToCart = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {
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

  ngOnInit(): void {
    // REFERENCE :: https://angular.io/start/start-routing#view-product-details
    const routeParams = this.route.snapshot.paramMap;
    const productId = Number(routeParams.get('id'));

    this.productService
      .getProducts()
      .subscribe(
        (data) =>
          (this.product = data.filter(
            (prod: Product) => prod.id === productId
          )[0])
      );
  }

  selectedVal(event: any) {
    this.productCount = event.target.value;
  }

  pushToCart(product: Product) {
    this.cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      url: product.url,
      count: Number(this.productCount),
    };

    this.cartService.addToCart(this.cartItem);
    window.alert(`${product.name} is added to the cart`);
  }
}
