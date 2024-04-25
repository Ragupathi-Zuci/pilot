// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CartService } from '../services/cart.service';
// import { UpdateCartService } from '../services/update-cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];
//   total = 0;



//   constructor(private cartService: CartService, private UpdateCartService: UpdateCartService) { }

//   ngOnInit() {
//     this.cartService.getCartItems().subscribe(items => {
//       this.cartItems = items;
//     });
//   }

//   getTotalPriceWithTaxes(): number {
//     const subtotal = this.getTotalPrice();
//     const sgst = 0.06 * subtotal;
//     const cgst = 0.06 * subtotal;
//     const total = subtotal + sgst + cgst;
//     // this.total=total;
//     return total;
//   }

//   getTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
//   }

//   removeItem(index: number) {
//     this.cartItems.splice(index, 1);
//     const subtotal = this.getTotalPrice();
//     const sgst = 0.06 * subtotal;
//     const cgst = 0.06 * subtotal;
//     const total = subtotal + sgst + cgst;
//     this.total = total;
//     this.UpdateCartService.sendUpdatedCartItems(this.cartItems);
//     this.UpdateCartService.sendUpdatedBill(this.total);

//   }

// }





// import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CartService } from '../services/cart.service';
// import { UpdateCartService } from '../services/update-cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.scss']
// })
// export class CartComponent implements OnInit {
//   cartItems: any[] = [];
//   total = 0;

//   constructor(private cartService: CartService, private updateCartService: UpdateCartService) { }

//   ngOnInit() {
//     this.cartService.getCartItems().subscribe(items => {
//       this.cartItems = items;
//       // Initialize quantity to 1 for each item
//       this.cartItems.forEach(item => {
//         if (!item.quantity) {
//           item.quantity = 1;
//         }
//       });
//       this.updateCart();
//     });
//   }

//   getTotalPriceWithTaxes(): number {
//     const subtotal = this.getTotalPrice();
//     const sgst = 0.06 * subtotal;
//     const cgst = 0.06 * subtotal;
//     const total = subtotal + sgst + cgst;
//     return total;
//   }

//   getTotalPrice(): number {
//     return this.cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
//   }

//   removeItem(index: number) {
//     this.cartItems.splice(index, 1);
//     this.updateCart();
//   }

//   updateCart() {
//     const subtotal = this.getTotalPrice();
//     const sgst = 0.06 * subtotal;
//     const cgst = 0.06 * subtotal;
//     const total = subtotal + sgst + cgst;
//     this.total = total;
//     this.updateCartService.sendUpdatedCartItems(this.cartItems);
//     this.updateCartService.sendUpdatedBill(this.total);
//   }

//   increaseQuantity(item: any) {
//     item.quantity++;
//     this.updateCart();
//   }

//   decreaseQuantity(item: any) {
//     if (item.quantity > 1) {
//       item.quantity--;
//       this.updateCart();
//     }
//   }

//   addToCart(product: any) {
//     const existingItemIndex = this.cartItems.findIndex(item => item.id === product.id);
//     if (existingItemIndex !== -1) {
//       this.cartItems[existingItemIndex].quantity++;
//     } else {
//       product.quantity = 1;
//       this.cartItems.push(product);
//     }
//     this.updateCart();
//   }
// }







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

  constructor(private cartService: CartService, private updateCartService: UpdateCartService) { }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      // Initialize quantity to 1 for each item
      this.cartItems.forEach(item => {
        if (!item.quantity) {
          item.quantity = 1;
        }
      });
      this.updateCart(); // Update initially
    });
  }

  getTotalPriceWithTaxes(): number {
    const subtotal = this.getTotalPrice();
    const sgst = 0.06 * subtotal;
    const cgst = 0.06 * subtotal;
    const total = subtotal + sgst + cgst;
    return total;
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.updateCart();
  }

  updateCart() {
    this.total = this.getTotalPriceWithTaxes(); // Update total
    this.updateCartService.sendUpdatedCartItems(this.cartItems); // Send updated cart items to service
    this.updateCartService.sendUpdatedBill(this.total); // Send updated bill to service
    console.log("cart comp",this.cartItems);
    console.log("cart comp",this.total)
  }

  increaseQuantity(item: any) {
    item.quantity++;
    this.updateCart();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    }
  }

  addToCart(product: any) {
    const existingItemIndex = this.cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex !== -1) {
      this.cartItems[existingItemIndex].quantity++;
    } else {
      product.quantity = 1;
      this.cartItems.push(product);
    }
    this.updateCart();
  }



  updateCartAndNavigate() {
    this.updateCart();
    // Add navigation logic here
  }
  
}
