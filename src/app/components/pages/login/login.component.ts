import { Component } from '@angular/core';
import { LoginLayoutComponent } from "../../login-layout/login-layout.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface LoginForm {
  email: FormControl,
  password: FormControl
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginLayoutComponent, PrimaryInputComponent, ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;

  constructor(private router: Router, 
              private loginService: LoginService,
              private toastService: ToastrService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success("Logged successfully"),
      error: () => this.toastService.error("An unexpected error ocurred")
    })
  }

  navigate() {
    this.router.navigate(["/signup"])
  }
}