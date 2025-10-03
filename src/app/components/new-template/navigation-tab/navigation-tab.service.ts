import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface NavTab {
  label: string;
  route: string;
  closable?: boolean;
}

@Injectable({ providedIn: 'root' })
export class NavigationTabService {
  private tabConfig: Record<string, NavTab> = {
    'page-one': { label: 'Page One', route: 'page-one' },
    'page-two': { label: 'Page Two', route: 'page-two', closable: true },
    'page-three': { label: 'Page Three', route: 'page-three', closable: true }
  };

  private tabsSubject = new BehaviorSubject<NavTab[]>([
    this.tabConfig['page-one']
  ]);
  tabs$ = this.tabsSubject.asObservable();

  getTabConfig(route: string): NavTab | undefined {
    return this.tabConfig[route];
  }

  addTab(route: string) {
    const tab = this.tabConfig[route];
    if (!tab) return;
    const tabs = this.tabsSubject.value;
    if (!tabs.find(t => t.route === route)) {
      this.tabsSubject.next([...tabs, tab]);
    }
  }

  removeTab(route: string) {
    const tabs = this.tabsSubject.value.filter(t => t.route !== route);
    this.tabsSubject.next(tabs);
  }

  getTabs(): NavTab[] {
    return this.tabsSubject.value;
  }
}
