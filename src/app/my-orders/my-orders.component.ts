import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../services/orders';
import { AdminProductViewComponent } from '../admin-product-view/admin-product-view.component';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
  products: any[] | undefined;
  isModalOpen = false;
  selectedRow: Orders | undefined;
  constructor(private ordersService: OrdersService, private modalService: BsModalService) { }

  ngOnInit(): void {
    const userEmail = sessionStorage.getItem('email');
    if (userEmail) {
      this.ordersService.getProductDetails().subscribe((orders: any[]) => {
        this.products = this.ordersService.filterProductsByEmail(orders, userEmail);
      });
    }
  }

  openBootstrapModal(row: Orders) {
    this.selectedRow = row;
    this.isModalOpen = true;
    const initialState = {
      firstname: row.firstName,
      updatedCartItems: row.updatedCartItems, 
      updatedBill:row.updatedBill
    };
    this.modalService.show(AdminProductViewComponent, { initialState });
  }
   closeModal() {
    this.isModalOpen = false;
  }
}
