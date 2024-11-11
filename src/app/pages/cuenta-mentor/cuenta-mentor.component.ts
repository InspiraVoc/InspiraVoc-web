import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { User } from '../../shared/models/user.model';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-cuenta',
  standalone: true,
  templateUrl: './cuenta-mentor.component.html',
  styleUrls: ['./cuenta-mentor.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,MatSnackBarModule]
})
export class CuentaMentorComponent implements OnInit {
  userProfile: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    role: '',
    phone: '',
    preferences: { interests: '', language: '', timezone: '' }
  };
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  isEditing: boolean = false;
  isEditingPreferences: boolean = false;
  showConfirmation = false;

  interestsAux: string = this.userProfile.preferences?.interests ?? '';
  languageAux: string = this.userProfile.preferences?.language ?? '';
  timezoneAux: string = this.userProfile.preferences?.timezone ?? '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.userProfile = currentUser;
      this.loadAuxPreferences();
    }
  }

  loadAuxPreferences() {
    this.userProfile.preferences = this.userProfile.preferences || {
      interests: '',
      language: '',
      timezone: ''
    };

    this.interestsAux = this.userProfile.preferences.interests;
    this.languageAux = this.userProfile.preferences.language;
    this.timezoneAux = this.userProfile.preferences.timezone;
  }

  toggleEdit() {
    this.isEditing = !this.isEditing; 
  }
  deteleUser(){
    this.authService.deleteCurrentUser();
    this.router.navigate(['/login']);
    this.snackBar.open('Cuenta elimina con éxito. Esperamos volver a verlo.', 'Cerrar', {
      duration: 3000,
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
  toggleEditPreferences() {
    this.isEditingPreferences = !this.isEditingPreferences;
  }

  saveProfile() {
    this.authService.updateProfile(this.userProfile);
    this.isEditing = false; 
  }

  savePreferences() {
    if (!this.userProfile.preferences) {
      this.userProfile.preferences = {
        interests: this.interestsAux,
        language: this.languageAux,
        timezone: this.timezoneAux
      };
    } else {
      this.userProfile.preferences.interests = this.interestsAux;
      this.userProfile.preferences.language = this.languageAux;
      this.userProfile.preferences.timezone = this.timezoneAux;
    }

    this.authService.updateProfile(this.userProfile);
    this.isEditingPreferences = false;
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.userProfile.profileImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  openConfirmationDialog():void {
    this.showConfirmation = true;
  }

  cancelDel() {
    this.showConfirmation = false;
  }
}