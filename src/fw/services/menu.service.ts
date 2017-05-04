import { Injectable } from '@angular/core';

export interface MenuItem {
  text: string;
  icon: string;
  route: string;
  submenu: Array<MenuItem>;
}

@Injectable()
export class MenuService {
  items: Array<MenuItem>;
  isVertical = true;
  showingLeftSideMenu = false;

  toggleLeftSideMenu(): void {
    this.showingLeftSideMenu = !this.showingLeftSideMenu;
  }
}