import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UpdateCartService } from '../services/update-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total = 0;



  constructor(private cartService: CartService, private UpdateCartService: UpdateCartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  getTotalPriceWithTaxes(): number {
    const subtotal = this.getTotalPrice();
    const sgst = 0.06 * subtotal;
    const cgst = 0.06 * subtotal;
    const total = subtotal + sgst + cgst;
    // this.total=total;
    return total;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    const subtotal = this.getTotalPrice();
    const sgst = 0.06 * subtotal;
    const cgst = 0.06 * subtotal;
    const total = subtotal + sgst + cgst;
    this.total = total;
    this.UpdateCartService.sendUpdatedCartItems(this.cartItems);
    this.UpdateCartService.sendUpdatedBill(this.total);

  }



}
