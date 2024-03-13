import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login(): void {
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
          console.error('Invalid email/phone or password');
        }
      });
    } else {
      console.error('Email/phone and password are required');
    }
  }
}
