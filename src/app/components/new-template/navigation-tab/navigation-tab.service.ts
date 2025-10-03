
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

export interface NavTab {
  label: string;
  route: string;
  closable?: boolean;
}


@Injectable({ providedIn: 'root' })
export class NavigationTabService {

  private tabsSubject = new BehaviorSubject<NavTab[]>([
    { label: 'Page One', route: 'page-one' }
  ]);
  tabs$ = this.tabsSubject.asObservable();

  constructor(private router: Router) {}

  /**
   * Add a tab and navigate to it. Accepts a NavTab request object.
   * If the tab already exists, just navigates to it.
   */
  addTab(request: NavTab) {
    const tabs = this.tabsSubject.value;
    const exists = tabs.find(t => t.route === request.route);
    if (!exists) {
      this.tabsSubject.next([...tabs, request]);
    }
    // Always navigate to the tab's route
    this.router.navigate(['/new-template', request.route]);
  }

  removeTab(route: string) {
    const tabs = this.tabsSubject.value.filter(t => t.route !== route);
    this.tabsSubject.next(tabs);
  }

  getTabs(): NavTab[] {
    return this.tabsSubject.value;
  }
}
