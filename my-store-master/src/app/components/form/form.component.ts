import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name: string = '';
  address: string = '';
  cardNumber: string = '';
  @Output() data = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  getName(name: string) {
    this.name = name;
  }

  onSubmit() {
    this.data.emit(this.name);
  }
}
