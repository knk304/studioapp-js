import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationTabService, NavTab } from './navigation-tab/navigation-tab.service';
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

  constructor(private tabService: NavigationTabService) {}

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  openPageOneTab() {
    const pageOneTab: NavTab = { label: 'Page One', route: 'page-one', basePath: '/new-template' };
    this.tabService.addTab(pageOneTab);
  }
}
