import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder,
  FormGroup, ReactiveFormsModule, Validators
} from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-verification',
  standalone: true,
  imports: [CommonModule,MatInputModule, FormsModule,
    ReactiveFormsModule, MatButtonModule, MatCardModule,
    MatSnackBarModule],
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.css'
})
export class VerificationComponent {
  verificationform: FormGroup;
  user: User | undefined;
  PDcode = '123456';
  private fb = inject(FormBuilder);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);
  private authService = inject(AuthService);

  constructor() {
    const navigation = this.router.getCurrentNavigation();
    this.user =navigation?.extras.state?.['user'];

    this.verificationform = this.fb.group({
      c1: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      c2: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      c3: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      c4: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      c5: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      c6: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
    });
  }

  onInput() {
    const codigo = this.verificationform.value.c1 +
                   this.verificationform.value.c2 +
                   this.verificationform.value.c3 +
                   this.verificationform.value.c4 +
                   this.verificationform.value.c5 +
                   this.verificationform.value.c6;
  
    this.verificationform.patchValue({ codigo });
  }

  controlHasError(control: string, error: string) {
    return (
      this.verificationform.controls[control].hasError(error) &&
      this.verificationform.controls[control].touched
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
    if (this.verificationform.valid) {
      
      const codigoVerificacion =  this.verificationform.value.c1 +
                                  this.verificationform.value.c2 +
                                  this.verificationform.value.c3 +
                                  this.verificationform.value.c4 +
                                  this.verificationform.value.c5 +
                                  this.verificationform.value.c6;

      if(codigoVerificacion === this.PDcode){
        if (this.user) {

          this.authService.register(this.user);
  
          this.showSnackBar(
            `Cuenta registrada con éxito. Bienvenido ${this.user.firstName}.`
          );
          this.router.navigate(['/login']); 
        } else {
          this.showSnackBar(`Error al registrar el usuario. Vuelva a intentar más tarde.`);       
        }
      }else{
        this.showSnackBar('Código incorrecto, intenta de nuevo.');
      }  
    }
  }

}


