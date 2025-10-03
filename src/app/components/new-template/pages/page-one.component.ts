import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-one',
  standalone: true,
  template: `
    <div class="page-content">
      <h3>Page One</h3>
      <p>This is the first page.</p>
      <button class="open-tab-btn" (click)="openPageTwo()">Open Page Two</button>
    </div>
  `,
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('from NavigationTabComponent', this.router.url);
  }
  openPageTwo() {
    // Use a shared service or event to notify nav-tabs to add Page Two
    window.dispatchEvent(new CustomEvent('openPageTwoTab'));
    this.router.navigate(['../page-two'], { relativeTo: this.route });
  }
}
