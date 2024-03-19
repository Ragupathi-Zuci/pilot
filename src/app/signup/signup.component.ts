
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { Users } from '../services/users';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private usersService: UsersService) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  addUser() {
    if (this.signupForm.valid) {
      const allUser: Users = {
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };

      this.usersService.signup(allUser).subscribe((data: {}) => {
        this.router.navigate(['/login']);
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
  }
}
