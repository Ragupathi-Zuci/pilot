import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total=0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  }
  
  getTotalPriceWithTaxes(): number {
    const subtotal = this.getTotalPrice();
    const sgst = 0.06 * subtotal; // SGST rate is 6%
    const cgst = 0.06 * subtotal; // CGST rate is 6%
    const total = subtotal + sgst + cgst;
    // this.total=total;
    return total;
  } 

  removeItem(index: number) {
    this.cartItems.splice(index, 1); 
    console.log(this.cartItems)
    const subtotal = this.getTotalPrice();
    const sgst = 0.06 * subtotal; 
    const cgst = 0.06 * subtotal; 
    const total = subtotal + sgst + cgst;
    this.total=total;
    
    console.log(this.total);
  }
  


}
