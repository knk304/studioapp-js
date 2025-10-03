import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavigationTabComponent } from './navigation-tab/navigation-tab.component';

@Component({
  selector: 'app-new-template',
  standalone: true,
  imports: [CommonModule, RouterModule, NavigationTabComponent],
  templateUrl: './new-template.component.html',
  styleUrls: ['./new-template.component.scss']
})
export class NewTemplateComponent {
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
