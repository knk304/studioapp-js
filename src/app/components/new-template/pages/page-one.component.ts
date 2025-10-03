
import { Component } from '@angular/core';
import { NavigationTabService } from '../navigation-tab/navigation-tab.service';

@Component({
  selector: 'app-page-one',
  standalone: true,
  template: `
    <div class="page-content redesigned">
      <div class="page-header">
        <h2>🚀 Page One</h2>
        <span class="page-desc">Welcome to the first page of your workflow.</span>
      </div>
      <div class="page-actions">
        <button class="open-tab-btn" (click)="openPageTwo()">
          <span class="icon">➕</span> Open Page Two
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  constructor(private tabService: NavigationTabService) {}

  openPageTwo() {
    this.tabService.addTab({ label: 'Page Two', route: 'page-two', closable: true, basePath: '/new-template' });
  }
}
