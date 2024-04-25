import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  allProducts: any = [];
  searchedProducts: any = []; 
  

  constructor(private productService: ProductService, private fb: FormBuilder, private cdr: ChangeDetectorRef, private cartService:CartService) { }

  ngOnInit() {
    this.displayProducts();
    
  }
  
  displayProducts() {
    this.productService.getProducts().subscribe((data: {}) => {
      this.allProducts = data;
     
    });
  }

  handleSearchedProducts(searchedProducts: any[]) {
    this.searchedProducts = searchedProducts || []; 
    if (this.searchedProducts.length == 0) {
      this.displayProducts(); 
    }
  }  

  addToCart(product: any) {
    this.cartService.getCartItems().subscribe(cartItems => {
      const existingItem = cartItems.find((item: any) => item.id === product.id);
      if (!existingItem) {
        this.cartService.addToCart(product);
        product.addedToCart = true; 
      }
    });
  }
  
  
  

  getStars(rating: number): ('full' | 'half' | 'empty')[] {
    const fullStarsCount = Math.floor(rating); 
    const halfStar = rating % 1 >= 0.5 ? 'half' : 'empty'; 
    const emptyStarsCount = 5 - fullStarsCount - (halfStar === 'half' ? 1 : 0); 

    const stars: ('full' | 'half' | 'empty')[] = Array(fullStarsCount).fill('full');
    if (halfStar !== 'empty') {
        stars.push(halfStar);
    }
    stars.push(...Array(emptyStarsCount).fill('empty')); 

    return stars;
}


}
