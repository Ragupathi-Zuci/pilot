import { Component } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../services/orders';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AdminProductViewComponent } from '../admin-product-view/admin-product-view.component';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {
  isModalOpen = false;
  selectedRow: Orders | undefined;
  allOrders: Orders[] = [];
  constructor(private ordersService: OrdersService, private modalService: BsModalService) {}
  ngOnInit() {
    this.displayProducts();
  }
  displayProducts() {
    this.ordersService.getProducts().subscribe((data: Orders | Orders[]) => {
      if (Array.isArray(data)) {
        this.allOrders = data;
      } else {
        this.allOrders = [data];
      }
    });
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
