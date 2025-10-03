
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavigationTabService, NavTab } from './navigation-tab.service';

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
  ) {}


  ngOnInit() {
    // Subscribe to tab state
    this.tabService.tabs$.subscribe(tabs => {
      this.tabs = tabs;
    });

    // On initial load, check the current route ONCE
    const url = this.router.url;
    const match = url.match(/new-template\/([^\/?#]+)/);
    const initialRoute = (match && match[1]) ? match[1] : 'page-one';
    this.activeRoute = initialRoute;
    // Always add the tab using a request object
  this.tabService.addTab({ label: capitalize(initialRoute.replace('-', ' ')), route: initialRoute, closable: initialRoute !== 'page-one' });

    // Listen for route changes, including initial navigation
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const match = event.urlAfterRedirects.match(/new-template\/([^\/?#]+)/);
        this.activeRoute = (match && match[1]) ? match[1] : 'page-one';
  this.tabService.addTab({ label: capitalize(this.activeRoute.replace('-', ' ')), route: this.activeRoute, closable: this.activeRoute !== 'page-one' });
      }
    });
    // Listen for openPageTwoTab event
    window.addEventListener('openPageTwoTab', this.openPageTwoTab);
  }


  openPageTwoTab = () => {
  this.tabService.addTab({ label: 'Page Two', route: 'page-two', closable: true });


  };


  closeTab(tab: NavTab, event: MouseEvent) {
    event.stopPropagation();
    const wasActive = this.activeRoute === tab.route;
    this.tabService.removeTab(tab.route);
    if (wasActive) {
      // If the closed tab was active, switch to the last tab or default
      const tabs = this.tabService.getTabs();
      const nextTab = tabs.length ? tabs[tabs.length - 1] : { route: 'page-one' };
      this.router.navigate(['/new-template', nextTab.route]);
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    window.removeEventListener('openPageTwoTab', this.openPageTwoTab);
  }
}

// Helper to capitalize first letter of each word
function capitalize(str: string): string {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}
