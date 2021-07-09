import {Component, OnInit} from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  {path: '/dashboard/main', title: 'Dashboard', icon: 'nc-bank', class: ''},
  {path: '/dashboard/user', title: 'Profil de l\'utilisateur', icon: 'nc-single-02', class: ''},
  {path: '/dashboard/services', title: 'Services', icon: 'nc-diamond', class: ''},
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
  styleUrls:['sidebar.component.scss'],
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

}
