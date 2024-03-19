import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateCartService {

  private updatedCartItemsSubject = new BehaviorSubject<any>(null);
  updatedCartItems$: Observable<any> = this.updatedCartItemsSubject.asObservable();

  private updatedBillSubject = new BehaviorSubject<any>(null);
  updatedBill$: Observable<any> = this.updatedBillSubject.asObservable();

  constructor() { }

  sendUpdatedCartItems(updatedCartItems: any) {
    this.updatedCartItemsSubject.next(updatedCartItems);
  }

  sendUpdatedBill(updatedBill: any) {
    this.updatedBillSubject.next(updatedBill);
  }
}
