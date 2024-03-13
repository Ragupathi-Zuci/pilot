import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../services/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  @Input() userDetails = {email:'',password:''}
  constructor(private fb: FormBuilder, private router: Router, private usersService:UsersService ){
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',Validators.required]
    });
  }

  addUser(userData: any) {
    const allUser: Users = {
      ...this.userDetails,
      
    };

    this.usersService.signup(allUser).subscribe((data: {}) => {
      this.router.navigate(['/login']);
    });
  }
}
