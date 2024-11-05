import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../core/services/event.service';

interface Mentor {
  name: string;
  image: string;
}

@Component({
  selector: 'app-mentores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mentores.component.html',
  styleUrls: ['./mentores.component.css']
})
export class MentoresComponent {
  mentores = [
    { name: 'Carlos Méndez', image: 'assets/images/mentor1.png' },
    { name: 'Jorge Ramírez', image: 'assets/images/mentor2.png' },
    { name: 'Laura Hernández', image: 'assets/images/mentor3.png' },
    { name: 'María López', image: 'assets/images/mentor4.png' }
  ];

  showTypeSelection = false;
  showConfirmation = false;
  showSuccessMessage = false;
  selectedMentor: Mentor | null = null;
  asesorType: string | null = null;

  constructor(private eventService: EventService) {}

  openTypeSelectionDialog(mentor: Mentor) {
    this.selectedMentor = mentor;
    this.showTypeSelection = true;
  }

  selectType(type: string) {
    this.asesorType = type;
    this.showTypeSelection = false;
    this.showConfirmation = true;
  }

  confirmSelection() {
    if (this.selectedMentor && this.asesorType) {
      const mentorName = this.selectedMentor.name;
      const price = this.asesorType === 'individual' ? 25 : 15;
      const duration = this.asesorType === 'individual' ? '1 hr' : '2 hr';
  
      // Item para la reunión
      const reunionItem = {
        nombre: `Reunión Orientador (${this.asesorType})`,
        duracion: duration,
        precio: price
      };
  
      // Item para el Test Vocacional
      const testItem = {
        nombre: 'Test Vocacional',
        duracion: '45 min',
        precio: 10
      };
  
      // Enviar ambos items al carrito
      this.eventService.updateCarritoItem(reunionItem);
      this.eventService.updateCarritoItem(testItem);
  
      // Agregar ambos eventos al calendario con fechas distintas
      this.eventService.addEvent({
        title: `Reunión ${this.asesorType} con ${mentorName}`,
        date: '2024-11-07'  // Fecha para la reunión
      });
  
      this.eventService.addEvent({
        title: 'Test Vocacional',
        date: '2024-11-15'  // Fecha distinta para el test vocacional
      });
  
      // Mostrar mensaje de éxito
      this.showConfirmation = false;
      this.showSuccessMessage = true;
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 2000);
    }
  }
  
  
  cancelSelection() {
    this.showTypeSelection = false;
    this.showConfirmation = false;
  }
}
