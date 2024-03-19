import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';
  isFormValid: boolean = false;

  constructor(private router: Router) { }

  login(loginForm: NgForm): void {
    if (loginForm.valid) {
      if (this.email === 'admin@gmail.com' && this.password === 'admin') {
        console.log('Login successful');
        this.router.navigate(['/adminHome']);
      } 
      else {
        console.log('Invalid email or password');
        this.loginError = 'Invalid email or password';
      }
    } else {
      console.log('Form is invalid');
      this.loginError = 'Please fill in all required fields';
    }
  }
}
