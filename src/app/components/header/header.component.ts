import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
    });
  }

  getTitle(): string {
    if (this.currentRoute.includes('workflow')) {
      return 'Workflow';
    }
    if (this.currentRoute.includes('druls-ui')) {
      return 'Druls UI Editor';
    }
    return 'Studio App';
  }
}
