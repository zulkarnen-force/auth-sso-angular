import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  // Convenience getter for easy access to form controls
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Perform the login action with the email and password
      // For now, let's simulate a successful login
      const loginSuccessful = true;

      if (loginSuccessful) {
        // Navigate to another page upon successful login
        this.router.navigate(['/app/dashboard/teacher']); // Update '/dashboard' with your desired route
      } else {
        // Handle unsuccessful login
        alert('Login failed. Please check your credentials.');
      }
    } else {
      // If the form is invalid, show an alert or handle as needed
      alert('Invalid form. Please check your inputs.');
    }
  }
}
