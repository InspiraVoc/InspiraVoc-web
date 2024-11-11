import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarMentorComponent } from '../side-bar-mentor/side-bar-mentor.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-mentor',
  standalone: true,
  imports: [HeaderComponent,SideBarMentorComponent,FooterComponent,RouterOutlet],
  templateUrl: './layout-mentor.component.html',
  styleUrl: './layout-mentor.component.css'
})
export class LayoutMentorComponent {

}
