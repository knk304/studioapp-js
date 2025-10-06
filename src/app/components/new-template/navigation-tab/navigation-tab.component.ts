import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

import { NavigationTabService, NavTab, capitalize } from './navigation-tab.service';

const BASE_PATH = '/new-template';

@Component({
    selector: 'app-navigation-tab',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './navigation-tab.component.html',
    styleUrls: ['./navigation-tab.component.scss']
})
export class NavigationTabComponent implements OnInit, OnDestroy {

    tabs: NavTab[] = [];
    activeRoute = 'page-one';
    private routerSub?: Subscription;

    constructor(
        private router: Router,
        private tabService: NavigationTabService
    ) { }


    ngOnInit() {
        // Subscribe to tab state
        this.tabService.tabs$.subscribe(tabs => {
            this.tabs = tabs;
        });

        // Set initial active route and ensure tab exists
        this.setActiveRouteFromUrl(this.router.url);

        // Listen for route changes
        this.routerSub = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.setActiveRouteFromUrl(event.urlAfterRedirects);
            }
        });
    }

    private setActiveRouteFromUrl(url: string) {
        // Use BASE_PATH constant for matching
        const escapedBase = BASE_PATH.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const match = url.match(new RegExp(`${escapedBase}/([^/?#]+)`));
        const route = (match && match[1]) ? match[1] : 'page-one';
        this.activeRoute = route;
        if (route === 'not-found') {
            this.tabService.addTab({
                label: 'Not Found',
                route: 'not-found',
                closable: true,
                basePath: BASE_PATH
            });
        } else {
            this.tabService.addTab({
                label: capitalize(route.replace('-', ' ')),
                route,
                closable: route !== 'page-one',
                basePath: BASE_PATH
            });
        }
    }



    /**
     * Open a tab by request object. Can be called from parent or other components.
     */
    openTab(tab: NavTab) {
    this.tabService.addTab({ ...tab, basePath: BASE_PATH });
    }


    closeTab(tab: NavTab, event: MouseEvent) {
        event.stopPropagation();
        const wasActive = this.activeRoute === tab.route;
        this.tabService.removeTab(tab.route);
        if (wasActive) {
            // If the closed tab was active, switch to the last tab or default
            const tabs = this.tabService.getTabs();
            const nextTab = tabs.length ? tabs[tabs.length - 1] : { route: 'page-one', basePath: BASE_PATH };
            const base = nextTab.basePath || BASE_PATH;
            this.router.navigate([base, nextTab.route]);
        }
    }

    ngOnDestroy() {
        this.routerSub?.unsubscribe();
    }
}


