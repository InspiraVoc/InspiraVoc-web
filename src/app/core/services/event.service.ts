import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventInput } from '@fullcalendar/core';

interface CarritoItem {
  nombre: string;
  duracion: string;
  precio: number;
}

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private addEventSource = new BehaviorSubject<EventInput[]>([]);
  private events: EventInput[] = []; 
  addEvent$ = this.addEventSource.asObservable();

  private carritoItemSource = new BehaviorSubject<CarritoItem[]>([]);
  carritoItem$ = this.carritoItemSource.asObservable();

  addEvent(event: EventInput) {
    this.events = [...this.events, event]; 
    this.addEventSource.next(this.events); 
  }

  updateCarritoItem(item: CarritoItem) {
    const currentItems = this.carritoItemSource.getValue();
    const updatedItems = [...currentItems, item]; 
    this.carritoItemSource.next(updatedItems); 
  }
}
