import { Component } from '@angular/core';
import { ChatComponent } from '../../shared/components/chat/chat.component';


@Component({
  selector: 'app-soporte',
  standalone: true,
  imports: [ChatComponent],
  templateUrl: './soporte.component.html',
  styleUrl: './soporte.component.css'
})
export default class SoporteComponent {

}
