import { Component, inject} from '@angular/core';/*quite el Inject I masyus*/
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators,} from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink,NavigationExtras } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSnackBarModule,RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService);

  constructor() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  controlHasError(control: string, error: string) {
    return (
      this.registerForm.controls[control].hasError(error) &&
      this.registerForm.controls[control].touched
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const newUser: User = {
        id: 0,
        role: 'Estudiante',
        ...this.registerForm.value,
      };
      
      const validateUser = this.authService.validation(newUser);

      if (validateUser) {
        /*this.showSnackBar(
          `Registro exitoso, bienvenido ${registeredUser.fName}`
        );*/
        const navigationExtras: NavigationExtras = {
          state: { user: validateUser },
        };
        this.router.navigate(['/verification'], navigationExtras);
      } else {
        this.showSnackBar('Ya existe una cuenta asociada a este correo electrónico.');
      }
    }
  }

}
