import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-page-two',
    standalone: true,
    template: `<div class="page-content"><h3>Page Two</h3><p>This is the second page.</p></div>`,
    styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
    constructor(public router: Router) {
        console.log('from NavigationTabComponent', this.router.url);
    }
}
