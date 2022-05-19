import { Component, OnInit } from '@angular/core';
import { ShippingService } from 'src/app/services/shipping.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  name: string = '';
  price: string = '';
  constructor(private shippingService: ShippingService) {}

  ngOnInit(): void {
    this.name = this.shippingService.getShippingDetails().name;
    this.price = this.shippingService.getShippingDetails().price;
  }
}
