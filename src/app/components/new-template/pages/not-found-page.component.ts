import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  standalone: true,
  template: `
    <div class="page-content not-found">
      <h2>404 - Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  `,
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {}
