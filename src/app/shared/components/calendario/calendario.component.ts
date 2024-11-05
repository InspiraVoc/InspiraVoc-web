import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, EventClickArg, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import esLocale from '@fullcalendar/core/locales/es';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-calendario',
  standalone: true,
  imports: [FullCalendarModule, CommonModule, FormsModule],
  templateUrl:'./calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  events: EventInput[] = []; 
  mostrarAlerta: boolean = false;
  mensajeAlerta: string = '';
  nuevoEvento: { title: string; date: string } | null = null;
  eventoAEliminar: EventClickArg | null = null;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      right: 'prev,next today',
      center: '',
      left: ''
    },
    locales: [esLocale],
    events: this.events,
    editable: true,
    selectable: true,
    eventClick: this.handleEventClick.bind(this)
  };

  constructor(private eventService: EventService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.eventService.addEvent$.subscribe((events) => {
      this.events = events;
      this.calendarOptions = { ...this.calendarOptions, events: this.events };
      this.cdr.detectChanges(); 
    });
  }


  handleEventClick(arg: EventClickArg) {
    this.eventoAEliminar = arg;
    this.mensajeAlerta = `¿Deseas eliminar el evento "${arg.event.title}"?`;
    this.mostrarAlerta = true;
  }

  confirmarEliminacion() {
    if (this.eventoAEliminar) {
      this.eventoAEliminar.event.remove();
    }
    this.cerrarAlerta();
  }

  cerrarAlerta() {
    this.mostrarAlerta = false;
    this.nuevoEvento = null;
    this.eventoAEliminar = null;
  }
}
