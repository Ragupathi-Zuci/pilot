import { Component, Input, input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router from Angular router
import { OrdersService } from '../services/orders.service';
import { Orders } from '../services/orders';
import { delay } from 'rxjs';

@Component({
  selector: 'app-place-the-order',
  templateUrl: './place-the-order.component.html',
  styleUrls: ['./place-the-order.component.scss']
})
export class PlaceTheOrderComponent {
  orderForm: FormGroup;
  @Input() orderDetails = {
  firstName:'',
  lastName:'',
  email:'',
  mobileNumber:'',
  cardNumber:'',
  cardHolderName:'',
  street:'',
  additionalInfo: '',
  pinCode: '',
  landmark: '',
  district: '',
  state: '',
  country: '',
  additionalMobile: '',
  termsAndConditions: true};

  constructor(private formBuilder: FormBuilder, private router: Router, private orderService:OrdersService ) { // Inject Router
    this.orderForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      cardHolderName: ['', Validators.required],
      expiration: ['', [Validators.required, Validators.pattern('(0[1-9]|10|11|12)/[0-9]{2}')]],
      cvv: ['', [Validators.required, Validators.pattern('[0-9]{3}')]],
      street: ['', Validators.required],
      additionalInfo: [''],
      pinCode: ['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      landmark: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      additionalMobile: ['', Validators.pattern('[0-9]{10}')],
      termsAndConditions: [false, Validators.requiredTrue]
    });
    
  }

  get formControls() {
    return this.orderForm.controls;
  }

  // onSubmit(): void {
  //   console.log('Form validity:', this.orderForm.valid);
  //   if (this.orderForm.valid) {
  //     console.log('Form is valid. Submitting...');
  //     const order: Orders = this.orderForm.value;
  //     this.orderService.submitOrder(order)
  //       .subscribe({
  //         next: (response) => {
  //           console.log('Form data successfully submitted:', response);
  //           this.router.navigate(['/paymentSuccess']);
  //         },
  //         error: (error) => {
  //           console.error('Error submitting form data:', error);
  //         }
  //       });
  //   } else {
  //     console.log('Form is not valid. Marking all controls as touched.');
  //     this.orderForm.markAllAsTouched();
  //     this.router.navigate(['/paymentSuccess']);
  //   }
    
  // }

  addOrder(orderData: any) {
    const completeOrder: Orders = {
      ...this.orderDetails,
      
    };

    this.orderService.submitOrder(completeOrder).subscribe((data: {}) => {
      this.router.navigate(['/paymentSuccess']);
    });
  }
  
}






