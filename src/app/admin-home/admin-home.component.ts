import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.scss'
})
export class AdminHomeComponent {
  allOrders: any = [];

  constructor(private ordersService:OrdersService){}

  ngOnInit() {
    this.displayProducts();
  }

  displayProducts() {
    this.ordersService.getProducts().subscribe((data: {}) => {
      this.allOrders = data;
     
    });
  }
}
