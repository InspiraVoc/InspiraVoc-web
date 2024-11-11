import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../shared/models/user.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultados',
  standalone: true,
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ResultadosComponent implements OnInit {
  estudiantes: User[] = [];
  filteredStudents: User[] = [];
  searchTerm: string = '';
  showResultDetails: boolean[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.estudiantes = this.authService.getEstudiantes();
    this.filteredStudents = [...this.estudiantes]; 
    this.showResultDetails = new Array(this.estudiantes.length).fill(false);
  }

  filterStudents(): void {
    const lowerSearchTerm = this.searchTerm.toLowerCase();
    this.filteredStudents = this.estudiantes.filter(estudiante => 
      `${estudiante.firstName} ${estudiante.lastName}`.toLowerCase().includes(lowerSearchTerm)
    );
  }

  toggleResultDetails(index: number): void {
    this.showResultDetails[index] = !this.showResultDetails[index];
  }
}
