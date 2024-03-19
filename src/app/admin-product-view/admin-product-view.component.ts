import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Orders } from '../services/orders';

@Component({
  selector: 'app-admin-product-view',
  templateUrl: './admin-product-view.component.html',
  styleUrl: './admin-product-view.component.scss'
})
export class AdminProductViewComponent {
  updatedCartItems: any[] = [];
  @Input() updatedBill!: any;
  @Input() firstname!: string;

  constructor(public bsModalRef: BsModalRef){}
}
