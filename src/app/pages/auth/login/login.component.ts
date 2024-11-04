import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, FormBuilder,
  FormGroup, ReactiveFormsModule, Validators
 } from '@angular/forms';

 import { MatButtonModule } from '@angular/material/button';
 import { MatInputModule } from '@angular/material/input';
 import { MatCardModule } from '@angular/material/card';
 import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
 import { Router, RouterLink } from '@angular/router';
 import { UserCredentials } from '../../../shared/models/user-credentials.model';
 import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule, FormsModule,
    ReactiveFormsModule, MatButtonModule, MatCardModule,
    MatSnackBarModule, RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService);
  constructor() {
    this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });}

  controlHasError(control: string, error: string) {
    return this.loginForm.controls[control].hasError(error);
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Cerrar', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  onSubmit(){
    if (this.loginForm.valid) {
      const credentials: UserCredentials = this.loginForm.value;

      try{
        const user = this.authService.login(credentials);
        if (user) {
          this.showSnackBar(`Bienvenido, ${user.firstName}`);
          
          this.router.navigate(['/app/inicio']);
  
        } else {
          this.showSnackBar('Correo o contraseña incorrectos.');
        }
      } catch(error){
        this.showSnackBar('Ha ocurrido un error. Vuelva a iniciar sesión.');    
      }  
    }
  }

}
