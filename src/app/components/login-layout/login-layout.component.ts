import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink, RouterLinkActive,],
  templateUrl: './login-layout.component.html',
  styleUrl: './login-layout.component.css'
})
export class LoginLayoutComponent {

}
