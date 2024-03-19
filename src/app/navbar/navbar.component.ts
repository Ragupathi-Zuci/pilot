import { Component, EventEmitter, OnInit, Output, ViewChild ,ElementRef} from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { ProductData } from '../services/product-data';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  allProducts: any = [];
  searchForm!: FormGroup;
  cartItemCount: number = 0;
  email:string | null='';
  @ViewChild('dropdown') dropdown!: ElementRef;

  @Output() searchedProductsEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private productService: ProductService, private fb: FormBuilder, private cartService: CartService) { }


  ngOnInit() {

    this.email = localStorage.getItem('email');
    if (this.email) {
      this.email = this.email.split('@')[0];
    } else {
      this.email = ''; 
    }

    this.searchForm = this.fb.group({
      searchText: ['']
    });
    this.displayProducts();
    this.cartService.getCartItems().subscribe(items => {
      this.cartItemCount = items.length;
    });
  }
  logout():void{
    localStorage.clear();
    this.email='Login' 
  }

  displayProducts() {
    this.productService.getProducts().subscribe((data: {}) => {
      this.allProducts = data;
    })
  }



  onSearchTextChange(event: any) {
    this.searchForm.controls['searchText'].valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => {
        if (this.searchForm.controls['searchText'].value.length > 1) {
          const searchedProducts = this.allProducts?.filter((b: { category: string; }) => b.category.toLowerCase().startsWith(event.target.value));
          console.log('searchedProducts', searchedProducts);
          this.searchedProductsEmitter.emit(searchedProducts); 
        }
        if (this.searchForm.controls['searchText'].value.length == 0) {
          const searchedProducts = this.displayProducts();
          this.searchedProductsEmitter.emit(searchedProducts); 
        }
      });
  }

  toggleDropdown(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdownMenu = target.nextElementSibling;
    if (dropdownMenu) {
      const isExpanded = dropdownMenu.classList.contains('show');
      const ariaExpanded = isExpanded ? 'false' : 'true';
      dropdownMenu.classList.toggle('show');
      target.setAttribute('aria-expanded', ariaExpanded);
    }
  }

}
