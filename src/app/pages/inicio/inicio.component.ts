import { Component } from '@angular/core';
import { CalendarioComponent } from '../../shared/components/calendario/calendario.component';
import { ActivitiesComponent } from '../../shared/components/activities/activities.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CalendarioComponent,ActivitiesComponent],

  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default  class InicioComponent {

}
