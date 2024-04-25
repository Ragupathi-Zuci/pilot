
// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { OrdersService } from '../services/orders.service';
// import { Orders } from '../services/orders';
// import { UpdateCartService } from '../services/update-cart.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-place-the-order',
//   templateUrl: './place-the-order.component.html',
//   styleUrls: ['./place-the-order.component.scss']
// })
// export class PlaceTheOrderComponent {
//   updatedCartItems: any;
//   updatedBill: any;
//   // orderForm: FormGroup;
//   @Input() orderDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     cardNumber: '',
//     cardHolderName: '',
//     street: '',
//     additionalInfo: '',
//     pinCode: '',
//     landmark: '',
//     district: '',
//     state: '',
//     country: '',
//     additionalMobile: '',
//     termsAndConditions: true,
//   };

//   constructor(private router: Router, private orderService: OrdersService, private UpdateCartService: UpdateCartService) { 

//   }

//   ngOnInit() {
//     this.UpdateCartService.updatedCartItems$.subscribe(updatedCartItems => {
//       this.receiveUpdatedCartItems(updatedCartItems);
//     });
//     this.UpdateCartService.updatedBill$.subscribe(updatedBill => {
//       this.receiveUpdatedBill(updatedBill);
//     });
//   }
//   get orderDetailsControls() {
//     return this.orderDetails;
//   }
//   addOrder() {
//     const completeOrder: Orders = {
//       ...this.orderDetails,
//       updatedCartItems: this.updatedCartItems,
//       updatedBill: this.updatedBill
//     };

//     this.orderService.submitOrder(completeOrder).subscribe((data: {}) => {
//       this.router.navigate(['/paymentSuccess']);
//     });
//   }

//   receiveUpdatedCartItems(updatedCartItems: any) {
//     this.updatedCartItems = updatedCartItems;
//     console.log("Updated Cart Items", updatedCartItems);
//   }

//   receiveUpdatedBill(updatedBill: any) {
//     this.updatedBill = updatedBill;
//     console.log("Updated Bill", updatedBill);
//   }
// }











// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { OrdersService } from '../services/orders.service';
// import { Orders } from '../services/orders';
// import { UpdateCartService } from '../services/update-cart.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// @Component({
//   selector: 'app-place-the-order',
//   templateUrl: './place-the-order.component.html',
//   styleUrls: ['./place-the-order.component.scss']
// })
// export class PlaceTheOrderComponent {
//   updatedCartItems: any;
//   updatedBill: any;
//   // orderForm: FormGroup;
//   @Input() orderDetails = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     cardNumber: '',
//     cardHolderName: '',
//     street: '',
//     additionalInfo: '',
//     pinCode: '',
//     landmark: '',
//     district: '',
//     state: '',
//     country: '',
//     additionalMobile: '',
//     termsAndConditions: true,
//   };

//   constructor(private router: Router, private orderService: OrdersService, private UpdateCartService: UpdateCartService) { 

//   }

//   ngOnInit() {
//     this.UpdateCartService.updatedCartItems$.subscribe(updatedCartItems => {
//       this.receiveUpdatedCartItems(updatedCartItems);
//     });
//     this.UpdateCartService.updatedBill$.subscribe(updatedBill => {
//       this.receiveUpdatedBill(updatedBill);
//     });
//   }
//   get orderDetailsControls() {
//     return this.orderDetails;
//   }
//   addOrder() {
//     const completeOrder: Orders = {
//       ...this.orderDetails,
//       updatedCartItems: this.updatedCartItems,
//       updatedBill: this.updatedBill
//     };

//     this.orderService.submitOrder(completeOrder).subscribe((data: {}) => {
//       this.router.navigate(['/paymentSuccess']);
//     });
//   }

//   receiveUpdatedCartItems(updatedCartItems: any) {
//     this.updatedCartItems = updatedCartItems;
//     console.log("Updated Cart Items", updatedCartItems);
//   }

//   receiveUpdatedBill(updatedBill: any) {
//     this.updatedBill = updatedBill;
//     console.log("Updated Bill", updatedBill);
//   }
// }








import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from '../services/orders.service';
import { Orders } from '../services/orders';
import { UpdateCartService } from '../services/update-cart.service';

@Component({
  selector: 'app-place-the-order',
  templateUrl: './place-the-order.component.html',
  styleUrls: ['./place-the-order.component.scss']
})
export class PlaceTheOrderComponent implements OnInit {
  updatedCartItems: any;
  updatedBill: any;

  @Input() orderDetails = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    cardNumber: '',
    cardHolderName: '',
    street: '',
    additionalInfo: '',
    pinCode: '',
    landmark: '',
    district: '',
    state: '',
    country: '',
    additionalMobile: '',
    termsAndConditions: true,
  };

  constructor(private router: Router, private orderService: OrdersService, private updateCartService: UpdateCartService) { }

  ngOnInit() {
    this.updateCartService.updatedCartItems$.subscribe(updatedCartItems => {
      this.receiveUpdatedCartItems(updatedCartItems);
    });
    this.updateCartService.updatedBill$.subscribe(updatedBill => {
      this.receiveUpdatedBill(updatedBill);
    });
  }

  addOrder() {
    const completeOrder: Orders = {
      ...this.orderDetails,
      updatedCartItems: this.updatedCartItems,
      updatedBill: this.updatedBill
    };

    this.orderService.submitOrder(completeOrder).subscribe((data: {}) => {
      this.router.navigate(['/paymentSuccess']);
    });
  }

  receiveUpdatedCartItems(updatedCartItems: any) {
    this.updatedCartItems = updatedCartItems;
    console.log("Updated Cart Items", updatedCartItems);
  }

  receiveUpdatedBill(updatedBill: any) {
    this.updatedBill = updatedBill;
    console.log("Updated Bill", updatedBill);
  }
}
