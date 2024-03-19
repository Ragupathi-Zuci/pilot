import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';
  isFormValid: boolean = false;

  constructor(private router: Router, private http: HttpClient) {}

  login(loginForm: NgForm): void {
    if (this.email && this.password) {
      this.http.get<any[]>('http://localhost:3002/users').subscribe(data => {
        const user = data.find(user => {
          return (user.email === this.email) && user.password === this.password;
        });
        if (user) {
          console.log('Login successful');
          localStorage.setItem('email', this.email);
          this.router.navigate(['/home']);
        } else {
          console.log('Invalid email or password');
          this.loginError = 'Invalid email or password';
        }
      });
    } else {
      console.log('Form is invalid');
      this.loginError = 'Please fill in all required fields';
    }
  }
}
