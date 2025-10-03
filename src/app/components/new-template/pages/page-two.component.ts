import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavigationTabService } from '../navigation-tab/navigation-tab.service';

@Component({
    selector: 'app-page-two',
    standalone: true,
    template: `
        <div class="page-content">
            <h3>Page Two</h3>
            <p>This is the second page.</p>
            <button class="open-tab-btn" (click)="openPageThree()">Open Page Three</button>
        </div>
    `,
    styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
    constructor(
        public router: Router,
        private tabService: NavigationTabService
    ) {
        console.log('from NavigationTabComponent', this.router.url);
    }

    openPageThree() {
        this.tabService.addTab({ label: 'Page Three', route: 'page-three', closable: true });
    }
}
