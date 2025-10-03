import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-three',
  standalone: true,
  template: `<div class="page-content"><h3>Page Three</h3><p>This is the third page.</p></div>`,
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent {
    constructor(private router: Router, private route: ActivatedRoute) {
        console.log('from PageThreeComponent', this.router.url);
    }
}
