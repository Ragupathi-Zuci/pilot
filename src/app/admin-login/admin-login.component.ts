import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.scss'
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router, private http: HttpClient) { }
  login(): void {
    if (this.email == 'admin@gmail.com' && this.password == 'admin') {
      console.log('Login successful');
      this.router.navigate(['/adminHome']);
    } else {
      console.log('Invalid email or password');
      alert("Invalid Username or password.")
    }
  }
}
