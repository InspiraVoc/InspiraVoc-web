import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-side-bar-mentor',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './side-bar-mentor.component.html',
  styleUrl: './side-bar-mentor.component.css'
})
export class SideBarMentorComponent {
  constructor(public authService: AuthService) {}
}
