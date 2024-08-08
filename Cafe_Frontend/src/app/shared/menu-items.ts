import {Injectable} from "@angular/core";

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  role: string;
}

const MENUITEMS: Menu[] = [
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'dashboard' , role: '' },
  { state: 'category', name: 'Manage Category', type: 'link', icon: 'category' , role: 'admin' },
  { state: 'product', name: 'Manage Product', type: 'link', icon: 'product' , role: 'admin' },
  { state: 'order', name: 'Manage Order', type: 'link', icon: 'order' , role: '' },
];

@Injectable()
export class MenuItems {
  getMenuItems(): Menu[] {
    return MENUITEMS;
  }
}
