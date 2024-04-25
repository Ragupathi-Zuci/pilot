import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { PlaceTheOrderComponent } from './place-the-order/place-the-order.component';
import { LoginComponent } from './login/login.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { SignupComponent } from './signup/signup.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { FooterComponent } from './footer/footer.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'cart', component: CartComponent , canActivate: [AuthGuardService] },
  { path: 'order',component:PlaceTheOrderComponent, canActivate: [AuthGuardService] },
  { path: 'login', component:LoginComponent },
  { path: 'paymentSuccess', component:PaymentSuccessComponent, canActivate: [AuthGuardService] },
  { path:'signup', component:SignupComponent},
  { path:'adminLogin', component:AdminLoginComponent},
  { path:'adminHome', component:AdminHomeComponent},
  { path:'footer', component:FooterComponent},
  { path:'myOrders', component:MyOrdersComponent},
  { path: '', redirectTo: 'home', pathMatch: 'prefix' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
