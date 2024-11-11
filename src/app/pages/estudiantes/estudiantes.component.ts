import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-estudiantes',
  standalone: true, 
  imports: [CommonModule, FormsModule], 
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {
  estudiantes: User[] = [];
  filteredStudents: User[] = [];
  showContactInfo: boolean[] = [];
  searchTerm: string = '';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.estudiantes = this.authService.getEstudiantes();
    this.filteredStudents = [...this.estudiantes]; 
    this.showContactInfo = new Array(this.estudiantes.length).fill(false);
  }

  toggleContactInfo(index: number): void {
    this.showContactInfo[index] = !this.showContactInfo[index];
  }

  filterStudents(): void {
    const term = this.searchTerm.toLowerCase();
    this.filteredStudents = this.estudiantes.filter(estudiante =>
      `${estudiante.firstName} ${estudiante.lastName}`.toLowerCase().includes(term)
    );
  }
}
