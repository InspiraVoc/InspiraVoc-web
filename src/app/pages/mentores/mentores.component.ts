import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../core/services/event.service';
import { FormsModule } from '@angular/forms';

interface Mentor {
  name: string;
  image: string;
}

@Component({
  selector: 'app-mentores',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mentores.component.html',
  styleUrls: ['./mentores.component.css']
})
export class MentoresComponent {
  mentores = [
    { name: 'Carlos Méndez', image: 'public/assets/images/mentor1.png' },
    { name: 'Jorge Ramírez', image: 'public/assets/images/mentor2.png' },
    { name: 'Laura Hernández', image: 'public/assets/images/mentor3.png' },
    { name: 'María López', image: 'public/assets/images/mentor4.png' }
  ];
  
  filteredMentores = [...this.mentores];
  searchTerm: string = '';

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

  filterMentores() {
    this.filteredMentores = this.mentores.filter(mentor =>
      mentor.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
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

      const reunionItem = {
        nombre: `Reunión Orientador (${this.asesorType})`,
        duracion: duration,
        precio: price
      };

      const testItem = {
        nombre: 'Test Vocacional',
        duracion: '45 min',
        precio: 10
      };

      this.eventService.updateCarritoItem(reunionItem);
      this.eventService.updateCarritoItem(testItem);

      this.eventService.addEvent({
        title: `Reunión ${this.asesorType} con ${mentorName}`,
        date: '2024-11-07'
      });

      this.eventService.addEvent({
        title: 'Test Vocacional',
        date: '2024-11-15'
      });

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
